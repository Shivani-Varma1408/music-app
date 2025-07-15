import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
const ProfileSidebar = () => {
    return (
        <aside className="basis-[17%] bg-gray-900 h-[calc(100vh-70px)] text-white">
            <nav className="w-full">
                <ul className="w-full p-5 flex flex-col">
                    <li>
                    <NavLink 
  to={"/user/profile"}
  className={({ isActive }) =>
    `${isActive ? "bg-[#FF9A9A] hover:hover:bg-[#d47777]" : ""} flex py-2 px-4 rounded-md cursor-pointer items-center gap-2 mb-4 font-semibold `
  }
  end
>
  <span className="text-xl">
    <MdAccountCircle />
  </span>
  <span>My Account</span>
</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to={"/user/profile/add-profile"}
                        className={({ isActive }) =>
                            `${isActive ? "bg-[#FF9A9A] hover:bg-[#d47777]" : ""} flex py-2 px-4 rounded-md cursor-pointer items-center gap-2 mb-4 font-semibold`
                          }>
                            <span className='text-xl '><IoMdPersonAdd /></span>
                            <span>Add Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to={"/user/profile/upload-profile-photo"}
                        className={({ isActive }) =>
                            `${isActive ? "bg-[#FF9A9A] hover:bg-[#d47777]" : ""} flex py-2 px-4 rounded-md cursor-pointer items-center gap-2 mb-4 font-semibold`
                          }>
                            <span className='text-xl '><MdAddPhotoAlternate /></span>
                            <span>Upload Profile Photo</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                         to={"/user/profile/change-password"}
                         className={({ isActive }) =>
                            `${isActive ? "bg-[#FF9A9A] hover:bg-[#d47777]" : ""} flex py-2 px-4 rounded-md cursor-pointer items-center gap-2 mb-4 font-semibold`
                          }>
                            <span className='text-xl '><RiLockPasswordFill /></span>
                            <span>Change Password</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                         to={"/user/profile/delete-account"}
                         className={({ isActive }) =>
                            `${isActive ? "bg-[#FF9A9A] hover:bg-[#d47777]" : ""} flex py-2 px-4 rounded-md cursor-pointer items-center gap-2 mb-4 font-semibold`
                          }>
                            <span className='text-xl '><MdDeleteForever /></span>
                            <span>Delete Account</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default ProfileSidebar