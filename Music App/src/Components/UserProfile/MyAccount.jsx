import React, { useContext } from "react";
import { FaUserXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { AuthUserContext } from "../../Context/AuthContextApi";
import { BackendUserContext } from "../../Context/FetchUserContext";
import { TbPhotoEdit } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";

const MyAccount = () => {
  let { authUser } = useContext(AuthUserContext);
  let { userData } = useContext(BackendUserContext);
  console.log(userData);

  return (
    <section className="w-[100%] h-[calc(100vh-70px)] flex justify-center items-center pt-[70px] text-white">
      <article className="w-[80%] bg-gray-700 flex flex-col justify-center p-2 rounded">
        <header className="w-full h-[120px] bg-gray-900 rounded-lg flex flex-col gap-2 justify-center items-center ">
          <img
            src={authUser?.photoURL}
            alt=""
            className="w-[120px] h-[120px] border rounded-full mt-[-100px]"
          />
          <h1>{authUser?.displayName}</h1>
          <p>{authUser?.email}</p>
          <span className="p-2 rounded-full bg-black text-white cursor-pointer hover:bg-white hover:text-black text-lg absolute  top-[180px] right-[40%]">
            <NavLink to ={"user/profile/user-profile-photo"}></NavLink> <TbPhotoEdit /></span>
        </header>
        <main className="w-[100%] flex flex-col">
         <div className="w-full flex justify-between items-center px-6"> 
          <h1 className="text-center text-2xl font-bold uppercase py-3">
            Personal Details
          </h1>
          <span className="flex items-center gap-2 ">
            <NavLink to = {"/user/profile/add-profile"}
            state={userData} className={"py-2 px-4 bg-[#FF9A9A] rounded-md hover:bg-green-600 flex items-center gap-2"}>
              <span>Edit</span> 
              <FaEdit />
              </NavLink>
              </span>
              </div>
          {
            userData ===null?(<aside className="w-full">
              <div className="flex flex-col justify-center items-center">
                <FaUserXmark className="text-9xl" />
                <h1 className="text-lg">User Data Not Found!!</h1>
              </div>
              <div className="flex justify-center items-center">
                <NavLink
                  to={"/user/profile/add-profile"}
                  className={
                    "py-2 px-10 my-5 bg-[#FF9A9A] rounded-lg text-lg font-semibold cursor-pointer"
                  }
                >
                  Add Profile
                </NavLink>
              </div>
            </aside>):(    <aside className="w-full">
            <article className="flex gap-3 py-2 px-6">
              <div className="w-[300px] flex items-center gap-2 bg-gray-800 p-4 rounded">
                <span className="text-lg font-semibold py-1">Name</span>
                <span className="border w-[230px] h-[30px] border-gray-600 rounded text-gray-300 px-3">{userData?.username}</span>
              </div>
              <div className="w-[300px] flex items-center gap-2 bg-gray-800 p-4 rounded">
                <span className="text-lg font-semibold py-1">Contact</span>
                <span className="border w-[230px] h-[30px] border-gray-600 rounded text-gray-300 px-3">{userData?.contactNumber}</span>
              </div>
              <div className=" w-[300px] flex items-center gap-2 bg-gray-800 p-4 rounded">
                <span className="text-lg font-semibold py-1">Gender</span>
                <span className="border w-[230px] h-[30px] border-gray-600 rounded text-gray-300 px-3">{userData?.gender}</span>
              </div>
            </article>
            <article className="flex gap-3 py-2 px-6">
              <div className="w-[300px] flex items-center gap-2 bg-gray-800 p-4 rounded">
                <span className="text-lg font-semibold py-1">DOB</span>
                <span className="border w-[230px] h-[30px] border-gray-600 rounded text-gray-300 px-3">{userData?.dob}</span>
              </div>
              <div className="w-[300px] flex items-center gap-2 bg-gray-800 p-4 rounded">
                <span className="text-lg font-semibold py-1">Age</span>
                <span className="border w-[230px] h-[30px] border-gray-600 rounded text-gray-300 px-3">{userData?.age}</span>
              </div>
              <div className="w-[300px] flex items-center gap-2 bg-gray-800 p-4 rounded">
                <span className="text-lg font-semibold py-1">Language</span>
                <span className="border w-[230px] h-[30px] border-gray-600 rounded text-gray-300 px-3">{userData?.lang}</span>
              </div>
            </article>
            <article className="flex gap-3 py-2 px-6">
              <div className="w-[300px] flex items-center gap-2 bg-gray-800 p-4 rounded">
                <span className="text-lg font-semibold py-1">Country</span>
                <span className="border w-[230px] h-[30px] border-gray-600 rounded text-gray-300 px-3">{userData?.country}</span>
              </div>
              <div className="w-[300px] flex items-center gap-2 bg-gray-800 p-4 rounded">
                <span className="text-lg font-semibold py-1">State</span>
                <span className="border w-[230px] h-[30px] border-gray-600 rounded text-gray-300 px-3">{userData?.state}</span>
              </div>
              <div className="w-[300px] flex items-center gap-2 bg-gray-800 p-4 rounded">
                <span className="text-lg font-semibold py-1">City</span>
                <span className="border w-[230px] h-[30px] border-gray-600 rounded text-gray-300 px-3">{userData?.city}</span>
              </div>
            </article>
            <article className="flex py-2 px-6">
              <div className="flex items-center gap-2 bg-gray-800 p-4 rounded">
                <span className="text-lg font-semibold py-1">Address</span>
                <span className="border w-[810px] h-[60px] border-gray-600 rounded text-gray-300 px-3">{userData?.address}</span>
              </div>
            </article>
          </aside>)
          }
          
          
       
      
        </main>
      </article>
    </section>
  );
};

export default MyAccount;