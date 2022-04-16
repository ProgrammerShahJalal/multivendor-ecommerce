import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useEffect, useLayoutEffect, useState } from "react";
import FirebaseInitialization from "../Firebase/Firebase.init";
import { addUserToDB } from "../Services/AddUserToDB/AddUserToDB";
import { GetUserDetails } from "../Services/UsersApi/GetUserDetails";

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
    userRole: string
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
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        role: '',
        store: '',
        date: '',
        phone: '',
        photo: '',
        _id: '',
        slug: ''
    } || null)
    const [isLoading, setIsLoading] = useState(true)
    const [isUserLoading, setIsUserLoading] = useState(true)
    const auth = getAuth()

    // REGISTER WITH EMAIL AND PASSWORD
    const RegisterUser: RegisterUserFunction = async (
        email: string,
        password: string,
        name: string,
        location: any,
        navigate: (destination: string) => void,
        userRole: string
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

                setError('')

                // Pass userCredential.user instead of auth.currentUser
                updateProfile(userCredential.user, {
                    displayName: name
                }).then(() => {
                    addUserToDB(userCredential.user, userRole)
                    if (userRole === "vendor") {
                        GetUserDetails(email, setUserDetails, setIsLoading)
                        if (localStorage.getItem("userDetails")) {
                            navigate('/vendorLogin')
                        }

                    } else {
                        navigate(location?.state?.from || '/')
                    }
                }).catch((error) => { setError(error.code.split('auth/',)[1]) });
            })
            .catch((error) => {

                setError(error.code.split('auth/',)[1])
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
            .then((userCredential: any) => {
                GetUserDetails(userCredential.user.email, setUserDetails, setIsLoading)
                navigate(location?.state?.from || '/')
                setError('')
            })
            .catch((error) => {

                setError(error.code.split('auth/',)[1])
            }).finally(() => setIsLoading(false));
    }
    // GOOGLE SIGN
    const handleGoogleSignIn = async (
        navigate: (destination: string) => void,
        location: any, userRole: string) => {
        await signInWithPopup(auth, googleProvider)
            .then((result: any) => {
                const user = result.user;
                setUser(user)
                addUserToDB(result.user, userRole);
                if (userRole === "vendor") {
                    navigate("/vendorLogin")
                } else {
                    navigate(location?.state?.from || '/')
                }
            }).catch((error: any) => {
                setError(error.code.split('auth/',)[1])
            });
    }
    // Facebook sign in
    const handleFacebookSIgnIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result: any) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user)
            })
            .catch((error: any) => {

                setError(error.code.split('auth/',)[1])
            });
    }
    // CHECK ADMIN 
    useLayoutEffect(() => {
        if (user.email) {
            GetUserDetails(user.email, setUserDetails, setIsLoading)
        }
    }, [user.email])

    console.log(userDetails, isLoading, 'firebase userDetails');


    // LOGOUT
    const logout = () => {
        signOut(auth).then(() => {
            setUser({
                displayName: '',
                email: '',
                emailVerified: false,
                photoURL: ''
            })
            setUserDetails({
                name: '',
                email: '',
                role: '',
                store: '',
                date: '',
                phone: '',
                photo: '',
                _id: '',
                slug: ''
            })
            localStorage.removeItem("userDetails");
        }).catch((error) => {
            setError(error.code.split('auth/',)[1])
        });
    }

    return { isUserLoading, userDetails, RegisterUser, SignIn, user, logout, error, isLoading, handleGoogleSignIn, handleFacebookSIgnIn };
};


