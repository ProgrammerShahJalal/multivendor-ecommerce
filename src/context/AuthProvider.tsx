import React from 'react';
import { UseFirebase } from '../hooks/UseFirebase';

type userState = {
    displayName: string
    email: string
    emailVerified: boolean
    photoURL: string
}

export interface IAuth {
    RegisterUser(name: string, email: string, password: string, location: object, navigate: any): void;
    SignIn(name: string, email: string, location: object, navigate: any): void;
    user: userState
    logout: () => void,
    error: string,
    isLoading: boolean,
    handleGoogleSignIn: () => void
    handleFacebookSIgnIn: () => void

}


export const AuthContext = React.createContext<IAuth>({
    RegisterUser() { },
    SignIn() { },
    logout() { },
    user: {
        email: '',
        displayName: '',
        emailVerified: false,
        photoURL: ''

    },
    error: '',
    isLoading: false,
    handleGoogleSignIn() { },
    handleFacebookSIgnIn() { }

});


const AuthProvider = ({ children }: any) => {
    const allContext = UseFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;