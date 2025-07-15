import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { __DB } from '../Backend/firebaseconfig';
import { FaMusic } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Spinner from '../Helper/Spinner';

const PopularAlbums = () => {
let [albums, setAlbums]=useState()
    useEffect(() => {
       let fetchAlbums = async () => {
    try{
               //! No we will etch the albums from the database
       let albumCollectionRef = collection(__DB, "music-albums");
       let getAlbums = await getDocs(albumCollectionRef);
       console.log(getAlbums);

       //! Now we will extract the reading data
       let albumData = getAlbums.docs.map((album) => ({
        ...album?.data(),
        songs: album?.data()?.songs || []
       }))
       console.log("Album Data:", albumData); 
       setAlbums(albumData);
    }catch(error){
       console.log("Error while fetching", error);
    }
       };
       //! Calling the function
       fetchAlbums();
    },[]);
  return (
    <section className='w-80vw'>
        {albums ?(<article className='w-full '>
            <header className='w-full p-5 flex items-center gap-3 '>
                <span className='text-3xl text-white flex items-center gap-2'><FaMusic/>
                    <h1 className='text-3xl font-bold text-white'>
                        Popular Albums
                    </h1>
                </span>
            </header>
            <main className='w-full '  >
<div className='px-6 flex items-center gap-5'>
    {albums.map((album,index)=>{
        return <NavLink to={`album-details/${album?.albumTitle}`} key={index}
        state={album}>
            <div className='w-[260px] h-[330px] bg-black/50 p-4 rounded-lg hover:bg-black ring-2  hover:ring-[#FF9A9A] '>
                <img src ={album?.albumThumbnail} alt={album?.albumTitle}
                className='w-full h-[250px]  object-cover rounded-md hover:scale-105 transition-all duration-100 ease-linear'/>
            <h1 className='py-2 px-4 bg-black mt-2 rounded text-xl text-white  text-center'>{album?.albumTitle}</h1>
            </div>
        </NavLink>
    })}
</div> 
            </main>
        </article>):(<section className='w-[100%] h-[100vh] fixed top-0 left-[7%] '>
    <Spinner/>
</section>)}
        
      
    </section>
  )
}

export default PopularAlbums