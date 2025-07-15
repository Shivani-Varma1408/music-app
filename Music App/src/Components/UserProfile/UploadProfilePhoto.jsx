import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

import { updateProfile } from 'firebase/auth';
import Spinner from '../../Helper/Spinner';
import { AuthUserContext } from '../../Context/AuthContextApi';


const UploadProfilePhoto = () => {
   let {authUser }= useContext(AuthUserContext);
   let navigate = useNavigate();
let [isLoading,setIsLoading]= useState(false);
    let [photoFile, setPhotoFile] = useState("");
    let [photoPreview, setPhotoPreview]=useState(null);


    let handleFileInputChange = (e)=>{
     let file= e.target.files[0];
     setPhotoFile(file);
   //!URL.createObjectURL(file)
   setPhotoPreview(URL.createObjectURL(file))

    }
let handleSubmit= async (e)=> {
  e.preventDefault();
  setIsLoading(true);
  try{
    if(!photoFile){
    toast.error("Please select a file before uploading")
    return;
  }

  //!Converting image into binary data
  //? FomrmData->API
let fileData= new FormData();
fileData.append("file", (photoFile));
fileData.append("upload_preset","music-app");
fileData.append("cloud_name","dja9qf3pp");


//!Upload you binary data to the cloudinary
let response = await fetch("https://api.cloudinary.com/v1_1/dja9qf3pp/image/upload",{
  method:"POST",
  body:fileData
}
 
);

let result=await response.json();
let imageURL =result.url;

//!Update the profile
await updateProfile(authUser,{
  photoURL:imageURL
})
toast.success("Profile photo updated successfully")
navigate("/user/profile");

  }catch(error){
    toast.error(error.code.slice(5));
    console.log("Error while uploading the file:",error);
    setIsLoading(false);
  }
 
  
  
}

  return (
    <section className='w-[100%] h-[calc(100vh-70px)] flex flex-col justify-center items-center text-white'>
        <article className='w-[35%] bg-gray-900 flex flex-col justify-center items-center rounded-md'>
            <header className='w-full'>
                <h1 className='text-3xl text-center font-bold uppercase py-6 px-4'>
Upload Profile Photo
                </h1>
            </header>
           
            {photoPreview === null? <><div className='w-[150px] h-[150px] border rounded-full flex justify-center items-center bg-gray-500'>
           No File Selected
            </div></>:<><img src={photoPreview} className='w-[150px] h-[150px] border rounded-full flex justify-center items-center bg-gray-500'/></>}
       
        </article>
        <main className='w-[35%] bg-gray-900'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center my-3 px-6'>
                <label htmlFor="profile" className='font-semibold text-lg py-2'>Upload your profile photo here</label>
                <input type="file" name="photoFile" id="profile" className='border py-2 px-4 border-gray-500 border-dotted file:bg-white text-black file:p-1 file:rounded file:cursor-pointer cursor-pointer '
                onChange={handleFileInputChange}/>
            
            </div> 
            <div className='flex justify-center items-center mt-3 mb-5' >
                <button className='py-2 px-6 bg-[#FF9A9A] hover:bg-[#d47777] cursor-pointer text-lg font-semibold rounded-lg'>
                    Upload Profile
                </button>
            </div>
          </form>
        </main>
        {isLoading && (<section className="w-[150%] h-[100vh] bg-black/50 fixed top-0">
      <Spinner/>
    </section>)}
    </section>
  )
}

export default UploadProfilePhoto