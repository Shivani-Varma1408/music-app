import React, { useContext } from 'react'
import { AuthUserContext } from '../Context/AuthContextApi'
import { Navigate } from 'react-router-dom'

const PublicRoutes = ({children}) => {
 let {authUser}=useContext(AuthUserContext)
 //! This is for login,register and reset password

 if(authUser!=null){
    return <Navigate to={"/user/profile"}/>
 }else{
   return <>{children}</>
 }
}

export default PublicRoutes