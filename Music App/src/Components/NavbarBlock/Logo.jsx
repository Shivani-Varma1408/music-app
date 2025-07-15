import React from 'react'
import  Battlefieldlogo from "../assets/Battlefieldlogo.png"
const Logo = () => {
  return (
    <aside className='basis-[15%] '>
        <figure className='w-full h-full flex justify-center items-center'>
            <img src={Battlefieldlogo} alt="MusicLogo" className='w-[120px] h-[60px]'/>
            </figure>
            </aside>
  )
}

export default Logo