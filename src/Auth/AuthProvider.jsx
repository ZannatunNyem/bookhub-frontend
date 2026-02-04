import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider=({children})=> {
    const [user, setUser] = useState(null);
    const[loading,setLoading]=useState(true);
    //create user

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signin user

    const signinUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signOut user

    const signOutUser=()=>{
    setLoading(true);
    return signOut(auth);
}

useEffect(()=>{
const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
});
 return ()=> {
    unSubscribe();
}
},[])
    const authInfo={
        user,
        loading,
        createUser,
        signinUser,
        signOutUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;