import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidAlbum } from "react-icons/bi";

const AlbumLandingSidebar = () => {
    return (
        <aside className='basis-[15%] bg-gray-900 min-h-[calc(100vh-70px)] text-white'>
            <nav className='w-full px-5 py-3 '>
                <ul className="w-full flex flex-col ">
                    <li className='py-2 px-6 bg-[#FF9A9A] rounded flex items-center mb-3 gap-3'>
                        <span className='text-xl'>
                        <GiHamburgerMenu />
                        </span>
                        <span className='text-lg tracking-wider'>
                            Explore
                        </span>
                    </li>
                    <li>
  <NavLink to="/"
    end 
    className={({ isActive }) => 
      `${isActive ? "bg-[#FF9A9A] hover:bg-[#d47777]" : ""} py-2 px-6 hover:bg-[#d47777] cursor-pointer flex items-center gap-2 rounded`
    }
  >
    <BiSolidAlbum/>
    <span>Popular Albums</span>
  </NavLink>
</li>
                </ul>
            </nav>
        </aside>
    )
}

export default AlbumLandingSidebar