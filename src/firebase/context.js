import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./config";

 export const AuthContext = createContext()

export const useAuth = () => {
   const context = useContext(AuthContext)
   if (!context) throw new Error('Error in the auth provider')
   return context
};

export function AuthProvider ({children}) {

const signup = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password);

const login = (email, password) =>  
    signInWithEmailAndPassword(auth, email, password);

    return (
        <AuthContext.Provider value={{signup, login}} >
         {children}
        </AuthContext.Provider>
    );
}