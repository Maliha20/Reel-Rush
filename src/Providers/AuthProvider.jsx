import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const auth= getAuth(app)
const Googleprovider = new GoogleAuthProvider();
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
      }
      useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
         })
          return ()=>{
             unsubscribed();
          }
      },[])
      const UserSignIn=(email,password)=>{
        setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
        }
      
        const profileUpdate =(name, role)=>{
          setLoading(true)
          return updateProfile(auth.currentUser,
              {
                  displayName: name,
             
              })
        }
      
        const profileData =(email,name) =>{
          setUser({...user, email: email,  displayName: name})
        }
        const userSignOut=()=>{
          setLoading(true)
          return signOut(auth)
        }
        const googleLogin = ()=>{
          setLoading(true)
          return signInWithPopup(auth, Googleprovider)
        }
    const authInfo={
        user,
        loading,
        createUser,
        UserSignIn,
        profileData,
        profileUpdate,
        userSignOut,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;