import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { IoLogOut } from "react-icons/io5";

import { BackendUserContext } from '../../Context/FetchUserContext';
import { AuthUserContext } from '../../Context/AuthContextApi';
const Menu = () => {
  let {authUser,logout} = useContext(AuthUserContext);
  console.log(authUser);
  let {userData}=useContext(BackendUserContext);
  let role=userData?.role
  console.log(role);
  
//!this is for unknown firtime user
  let AnonymousUser = () =>{
    return <><li >
    <NavLink to={"/auth/login"} className={({isActive}) => `${isActive?"bg-[#FF9A9A]":""} px-4 py-2 font-semibold hover:bg-[#d47777] rounded-lg cursor-pointer`}>
        Login
        </NavLink>
        </li>
        
    <li>
        <NavLink to={"/auth/register"} className={({isActive}) => `${isActive?"bg-[#FF9A9A]":""} px-4 py-2 font-semibold hover:bg-[#d47777] rounded-lg cursor-pointer `}>
            Register
            </NavLink>
            </li>
            </>
  };
//!this is for authenticated user
  let AuthenticatedUser = () =>{
return<>
{role === "admin"&& (<li><NavLink to={"/admin"}
end
className={({isActive}) => `${isActive?"bg-[#FF9A9A]":""} px-4 py-2 font-semibold hover:bg-[#d47777] rounded-lg cursor-pointer flex gap-2 items-center`}>Admin</NavLink></li>)}
<li >
<NavLink to={"/user/profile"} className={({isActive}) => `${isActive?"bg-[#FF9A9A]":""} px-4 py-2 font-semibold hover:bg-[#d47777] rounded-lg cursor-pointer flex gap-2 items-center`}>
  
  <span>{authUser?.displayName}</span>
  <img src={authUser?.photoURL} alt=""
  className="w-[25px] h-[25px] rounded-full"/>
    </NavLink>
    </li>
    <li>
    <button 
    onClick={()=>logout()}
 className={` px-4 py-2 font-semibold hover:bg-red-600 rounded-lg cursor-pointer flex gap-2 items-center`}>
  <span className='text-lg'>Logout</span>
  <span><IoLogOut/></span>
  </button> 
  </li>
</>
  }
  return (
    <aside className='basis-[30%] h-[70px]'>
   <ul className='w-full h-[70px] flex justify-evenly items-center'>
    <li >
        <NavLink
        to={"/"} className={({isActive}) => `${isActive?"bg-[#FF9A9A]":""} px-4 py-2 font-semibold hover:bg-[#d47777] rounded-lg cursor-pointer`}>
            Home
            </NavLink>
            </li>
            {authUser === null ? <AnonymousUser/> : <AuthenticatedUser/>}
    
    </ul> 
    </aside>
  )
}

export default Menu