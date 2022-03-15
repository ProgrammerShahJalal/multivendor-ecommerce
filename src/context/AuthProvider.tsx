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
    handleGoogleSignIn: (navigate: any, location: any) => void
    handleFacebookSIgnIn: () => void
    userDetails: {
        name: string,
        email: string,
        role: string,
        store: string,

    }

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
    handleFacebookSIgnIn() { },
    userDetails: {
        name: '',
        email: '',
        role: '',
        store: ''
    }

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