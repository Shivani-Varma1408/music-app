import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Languages from "./JSON/languages.json";
import Cities from "./JSON/cities.json";
import Countries from "./JSON/countries.json";
import States from "./JSON/states.json"
import { AuthUserContext } from '../../Context/AuthContextApi';
import { doc, setDoc } from 'firebase/firestore';

import { useLocation, useNavigate } from 'react-router-dom';
import { __DB } from '../../Backend/firebaseconfig';



const AddProfile = () => {
  let {authUser} = useContext(AuthUserContext)
  let navigate = useNavigate();
  let location =useLocation();
  let [userDetails, setUserDetails] = useState({
    username: location?.state?.username,
    contactNumber: location?.state?.contactNumber,
    gender: location?.state?.gender,
    dob: location?.state?.dob,
    age: location?.state?.age,
    lang: location?.state?. lang,
    country: location?.state?.country,
    state: location?.state?.state,
    city: location?.state?.city,
    address: location?.state?.address,
    role: "user"
  })

  //* Destructuring the userDetails
  let { username, contactNumber, gender, dob, age, lang, country, state, city, address } = userDetails;

  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  }

  let handleSubmit = async(e) => {
    e.preventDefault();
    try {
      //* extracting 4 properties from authUser
       let {displayName, photoURL, email, uid} = authUser;

       //* create an object to send inside the database
       //* payload object
       //* payload is nothing but the actual object which is send to the database
       //* in the programming language actual object is called as payload
       let payload = {
        ...userDetails,
        displayName,
        photoURL,
        uid
       }

       //* step-1 create a document reference inside the database(cloud firestore)
       let user_profile_collection = doc(__DB, "user_details", uid);

       //* step-2 set or store the data inside the database
       await setDoc(user_profile_collection, payload);
       navigate("/user/profile");
       toast.success("User has been updated successfully")
    } catch (error) {
      toast.error(error.code.slice(5))
      console.log("Error while uploading the data",error);
    }
  }


  return (
    <section className="w-[100%] h-[calc(100vh-70px)]  flex flex-col justify-center items-center text-white">
      <article className="w-[60%]  p-4 flex  flex-col justify-center items-center rounded border">
        <header className="w-full h-[80px] text-3xl font-semibold bg-[#FF9A9A] rounded-lg flex flex-col gap-3 mb-4 justify-center items-center">
          Add User Details
        </header>
        <main className='flex'>
          <div className='pr-2'>
            <label>Username</label>
            <input type="text" name="username" id='username' className="w-full p-2  rounded  border border-white" onChange={handleInputChange} value={username} />
          </div>
          <div className='pr-2'>
            <label>Contact Number</label>
            <input type="number" name="contactNumber" id='contactNumber' className="w-full p-2 rounded border border-white" onChange={handleInputChange} value={contactNumber} />
          </div>
          <div className='pr-2'>
            <label htmlFor='gender'>Gender</label>
            <div className="flex gap-2">
              <label><input type="radio" name="gender" value="male" onChange={handleInputChange} 
              checked={gender==="male"} /> Male</label> {""}
              <label><input type="radio" name="gender" value="female" onChange={handleInputChange} 
              checked={gender==="female"}/> Female</label>
              <label><input type="radio" name="gender" value="others" onChange={handleInputChange} 
              checked={gender==="others"}/> Others</label>
            </div>
          </div>
        </main>
          <form onSubmit={handleSubmit}>
          <main className='flex'>
            <div className='pr-2'>
              <label htmlFor='dob'>DOB</label>
              <input type="date" name='dob' id='dob' className="w-full p-2 rounded text-white border border-white" onChange={handleInputChange} value={dob} />
            </div>
            <div className='pr-2'>
              <label htmlFor='age'>Age</label>
              <input type="number" name="age" id='age' className="w-full p-2 rounded border border-white" onChange={handleInputChange} value={age} />
            </div>
            <div className='pr-2'>
              <label htmlFor='lang'>Language</label>
              <input type="text" name="lang" id='lang' className="w-full p-2 rounded border border-white" onChange={handleInputChange} value={lang} list='langList'/>
              <datalist id='langList'>
                {
                  Languages.map((language,index) => {
                    return <option key={index}>{language}</option>
                  })
                }
              </datalist>
            </div>
            </main>
        <main className='flex'>
          <div className='pr-2'>
            <label htmlFor='country'>Country</label>
            <input type="text" name="country" id='country' className="w-full p-2 rounded  border border-white" onChange={handleInputChange} list='countryList' value={country}/>
            <datalist id='countryList'>
              {
                Countries.map((country,index) => {
                  return <option key={index}>{country}</option>

                })
              }
            </datalist>
          </div>
          <div className='pr-2'>
            <label htmlFor='state'>State</label>
            <input type="text" name="state" id='state' className="w-full p-2 rounded  border border-white" onChange={handleInputChange} list='stateList' value={state}  />
            <datalist id='stateList'>
              {
                States.map((state,index) => {
                  return <option key={index}>{state}</option>

                })
              }
            </datalist>
          </div>
          <div className='pr-2'>
            <label htmlFor='city'>City</label>
            <input type="text" name="city" id='city' className="w-full p-2 rounded= border border-white" onChange={handleInputChange} value={city} list='cityList' />
            <datalist id='cityList'>
              {
                Cities.map((city,index) => {
                  return <option key={index}>{city}</option>

                })
              }
            </datalist>
          </div>
        </main>
        <div>
          <label htmlFor='address'>Address</label>
          <textarea type="text" name="address" id='address' className="w-full p-2 rounded border border-white" onChange={handleInputChange} value={address} ></textarea>
        </div>
        <div className='flex justify-center items-center'>
          <button className="py-2 px-10 my-5 bg-[#FF9A9A] rounded-lg text-lg font-semibold cursor-pointer">Add User</button>
        </div>
      </form>
     </article>
  </section >
  )
}

export default AddProfile