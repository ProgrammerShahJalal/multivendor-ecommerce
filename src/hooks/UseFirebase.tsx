import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialization from "../Firebase/Firebase.init";

FirebaseInitialization()
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();




// type for the RegisterUserFunction
type RegisterUserFunction = (
    email: string,
    password: string,
    name: string,
    location: object,
    navigate: (destination: string) => void,
) => Promise<void>;

type SignInUserFunction = (
    email: string,
    password: string,
    location: object,
    navigate: (destination: string) => void,
) => Promise<void>;


type userState = {
    displayName: string
    email: string
    emailVerified: boolean
    photoURL: string
}


export const UseFirebase = (
    context?: any
) => {
    const [user, setUser] = useState<userState>({
        displayName: '',
        email: '',
        emailVerified: false,
        photoURL: ''
    })
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()

    // REGISTER WITH EMAIL AND PASSWORD
    const RegisterUser: RegisterUserFunction = async (
        email: string,
        password: string,
        name: string,
        location: any,
        navigate: (destination: string) => void,
    ) => {
        setIsLoading(true)
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const newUser = {

                    displayName: name,
                    email: email,
                    emailVerified: false,
                    photoURL: '' || 'https://i.ibb.co/dDS0Jq5/user.png'
                };

                setUser(newUser);
                saveUser(email, name, 'POST')
                navigate(location?.state?.from || '/')
                setError('')

                // Pass userCredential.user instead of auth.currentUser
                updateProfile(userCredential.user, {
                    displayName: name
                }).then(() => { }).catch((error) => { setError(error) });
            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => setIsLoading(false));
    }


    // OBSERVE A USER
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            setIsLoading(true)
            if (user) {
                let userDetails = {
                    displayName: user.displayName || '',
                    email: user.email || '',
                    emailVerified: user.emailVerified || false,
                    photoURL: user.photoURL || 'https://i.ibb.co/dDS0Jq5/user.png'
                }
                setUser(userDetails)
            } else {
                setUser({
                    displayName: '',
                    email: '',
                    emailVerified: false,
                    photoURL: 'https://i.ibb.co/dDS0Jq5/user.png'
                })
            }
            setIsLoading(false)
            return () => unsubscribed;

        });

    }, [auth])
    // console.log('firebase', user);

    // SIGN IN WITH USER AND EMAIL
    const SignIn: SignInUserFunction = async (
        email: string,
        password: string,
        location: any,
        navigate: (destination: string) => void,
    ) => {
        setIsLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(location);

                navigate(location?.state?.from || '/')
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => setIsLoading(false));
    }
    // GOOGLE SIGN
    const handleGoogleSignIn = async (
        navigate: (destination: string) => void,
        location: any) => {
        await signInWithPopup(auth, googleProvider)
            .then((result: any) => {
                navigate(location?.state?.from || '/')
                const user = result.user;
                setUser(user)
                saveUser(user.email, user.displayName, 'PUT');
                // ...
            }).catch((error: any) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    // Facebook sign in
    const handleFacebookSIgnIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result: any) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user)
                saveUser(user.email, user.displayName, 'PUT');
            })
            .catch((error: any) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }



    // LOGOUT
    const logout = () => {
        signOut(auth).then(() => {
            setUser({
                displayName: '',
                email: '',
                emailVerified: false,
                photoURL: ''
            })
        }).catch((error) => {
            setError(error.message)
        });
    }

    const saveUser = (email: string, displayName: string, method: string) => {
        const user = { email, displayName };
        fetch('https://morning-inlet-49130.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
    return { RegisterUser, SignIn, user, logout, error, isLoading, handleGoogleSignIn, handleFacebookSIgnIn };
};