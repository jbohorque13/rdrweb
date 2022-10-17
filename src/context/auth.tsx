import React from 'react';

const initialState: AuthState = {
    user: undefined,
    isSignedIn: false,
    role: undefined
}

export const AuthContext = React.createContext<AuthContext>({
    ...initialState,
    signIn: (params: ISignInVariables) => new Promise( resolve => resolve(null))
});

// It's a promise function that make local.setItem to save token that received by path.
// The last one thing by make is return a object
type AuthPropChildren = React.PropsWithChildren<{}>

const AuthContextProvider = ({ children }: AuthPropChildren) => {
    // Handlers
    const signIn = React.useCallback(async (params: ISignInVariables) => {
        try {
            const {jwtToken} = params;
            localStorage.setItem('tokenKey', jwtToken)
            return {
                success: true,
                user: null
            }
        } catch (e) {
            console.log(e)
        }
    }, []);

    const defaultValuesState = React.useMemo(() =>{
        const out: AuthState = {
            user: {
                name: 'Josue',
                lastName: 'Bohorquez'
            },
            isSignedIn: false,
            role: undefined
        }
        return out;
    }, [])

    const contextValues = {
        ...defaultValuesState,
        signIn
    }

    return (
         <AuthContext.Provider value={contextValues}>
             {children}
         </AuthContext.Provider>
    )
}

export default AuthContextProvider;

