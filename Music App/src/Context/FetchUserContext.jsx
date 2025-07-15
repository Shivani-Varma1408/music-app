import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthUserContext } from './AuthContextApi';
import { doc, onSnapshot } from 'firebase/firestore';
import { __DB } from '../Backend/firebaseconfig';

   
export let BackendUserContext= createContext(null);

const FetchUserContext = ({children}) => {
    let {authUser }=useContext(AuthUserContext);
    let uid=authUser?.uid;
    let [userData,setUserData]=useState(null||{});
let [role,setRole]=useState("");

    useEffect (()=>{
      let fetchProfile=()=>{
        if(!uid){
            return;
        }

        //!onSnapShot()->Event Listener
        let user_data_reference=doc(__DB, "user_details",uid)

        onSnapshot(user_data_reference,(userInfo)=>{
           if(userInfo.exists ()){
            setUserData(userInfo?.data())
           }else
        {console.log("Profile data not found");
        }
        })
      }
fetchProfile();
    },[uid])
    //![uid]->dependency array-whenever uid is there it will fetch the data
  return (
  <BackendUserContext.Provider value={{userData}}>
    {children}
  </BackendUserContext.Provider>
  )
}

export default FetchUserContext