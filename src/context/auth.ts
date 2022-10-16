import React from 'react';

interface ISignInResult {
    success: boolean;
    user: {
        name: string;
        lastname: string;
        email: string;
        socialMedia: string;
    }
}

interface AuthInterface {
    token: string;
    display?: boolean;
    signIn?: (params: ISignInVariables) => Promise<ISignInResult | null>;
}
const authInitialState: AuthInterface = {
    token: 'Josue Daniel',
    display: false
}

export const AuthContext = React.createContext<AuthInterface | null>({
    ...authInitialState,
    signIn: (params: ISignInVariables) => new Promise( resolve => resolve(null))
});

// It's a promise function that make local.setItem to save token that received by path.
// The last one thing by make is return a object

