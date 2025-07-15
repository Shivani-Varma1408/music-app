import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiFolderMusicFill } from "react-icons/ri";
const AdminSidebar = () => {
  return (
    <aside className="basis-[14%] h-[100vh] bg-gray-900">
        <nav className='w-full '>
            <ul className="w-full p-6">
                <li>
                    <NavLink to={"create-album"} className={(isActive)=>`px-4 py-2 flex items-center gap-2 hover:bg-[#d47777] rounded-md cursor-pointer ${isActive?"bg-[#FF9A9A]":""} `}> 
                        <span className='text-lg'><RiFolderMusicFill /></span>
                        <span className='font-semibold '>Create Album</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default AdminSidebar