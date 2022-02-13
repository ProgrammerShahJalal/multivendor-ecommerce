import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialization from "../Firebase/Firebase.init";

FirebaseInitialization()


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
                    photoURL: ''
                };

                setUser(newUser);
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

    // REGISTER WITH EMAIL AND PASSWORD
    // const RegisterUser: RegisterUserFunction = async (
    //     email: string,
    //     password: string,
    //     name: string,
    // ) => {
    //     setIsLoading(true)
    //     const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    //     const newUser = {

    //         displayName: name,
    //         email: email,
    //         emailVerified: false,
    //         photoURL: ''
    //     };

    //     setUser(newUser);
    //     setError('')

    //     // Pass userCredential.user instead of auth.currentUser
    //     updateProfile(userCredential.user, {
    //         displayName: name
    //     }).then(() => { }).catch((error) => { setError(error) });
    //     // history.replace('/');
    // };

    console.log(error);


    // OBSERVE A USER
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            setIsLoading(true)
            if (user) {
                let userDetails = {
                    displayName: user.displayName || '',
                    email: user.email || '',
                    emailVerified: user.emailVerified || false,
                    photoURL: user.photoURL || ''
                }
                setUser(userDetails)
            } else {
                setUser({
                    displayName: '',
                    email: '',
                    emailVerified: false,
                    photoURL: ''
                })
            }
            setIsLoading(false)
            return () => unsubscribed;

        });

    }, [auth])
    console.log('firebase', user);

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


    return { RegisterUser, SignIn, user, logout, error, isLoading };
};