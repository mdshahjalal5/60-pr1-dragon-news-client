import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
export  const AuthContext = createContext();
function AuthProvider({children}){
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const providerLogin = ( provider) =>{
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login =  (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // const logOut = () =>{
    //     return signOut(auth);
    // }
    const method = { 
        providerLogin, createUser, login, error, setError, loading, setLoading, user, 
    }
    useEffect(function(){
        const effect = onAuthStateChanged(auth, function(user){
            console.log('on state changed ', user);
            setLoading(false);
            setUser(user);
            
        })  
        
        return ()=>{
            effect();
            // effect.unSubscribe();
        }
    }, [

    ])
return <>
    <AuthContext.Provider value={method}>
            {children}
    </AuthContext.Provider>
</>
}

export {AuthProvider};