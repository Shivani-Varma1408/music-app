import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'

import toast from 'react-hot-toast';
import { __AUTH } from '../Backend/firebaseconfig';


//!step-1 create context for the user
export let AuthUserContext = createContext(null);

const AuthContextApi = ({children}) => {

    let [authUser, setAuthUser] = useState(null || {});
    useEffect(() => { 
        onAuthStateChanged(__AUTH, (userInfo) =>{
    if(userInfo?.emailVerified === true){
        window.localStorage.setItem("UserToken", userInfo?.accessToken)
        setAuthUser(userInfo);
    }else{
        setAuthUser(null);
        window.localStorage.removeItem("UserToken");
    }
    })
    },[]);

    //!logout fuctionality
    let logout =async()=>{
        try{
           await signOut(__AUTH);
           window.localStorage.removeItem("UserToken");
           toast.success("Logout Successfully");
           setTimeout(()=>{
            window.location.assign("/");
           },1000)
        }catch (error){
            toast.error(error.code.slice(5));
        }
    }

    return <AuthUserContext value={{authUser, logout}}> 
        {children}
    </AuthUserContext>
}

export default AuthContextApi