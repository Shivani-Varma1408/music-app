import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 
import "./global.css";
import { RouterProvider } from "react-router-dom";
import myRoutes from "./Routes/routes";

import FetchUserContext from "./Context/FetchUserContext";
import AuthContextApi from "./Context/AuthContextApi";
import AudioPlayerContext from "./Context/AudioPlayerContext";


ReactDOM.createRoot(document.getElementById("root")).render(
   <>
   <AuthContextApi>
      <FetchUserContext> 
         <AudioPlayerContext>
            
         <RouterProvider router={myRoutes}/> 
         </AudioPlayerContext>
         </FetchUserContext>
   </AuthContextApi>
  
   </>
)