import { useState } from "react";
import "../App.css"
import { useTheme } from "../createContext/UserContext";

function Button() { 

    const {themeMode , askIsdark} = useTheme();

  return (
    <div className="w-20 p-2  float-right">
        <div
         className="w-12 h-12 rounded-full border-2 border-white flex justify-center
          items-center icon-box bg-black ">
          <i onClick={askIsdark}
           className={` text-2xl text-amber-500 cursor-pointer
           ${themeMode ? 'fas fa-sun' : 'fas fa-moon' }
           `}></i>
         </div>
    </div>
  )
}

export default Button