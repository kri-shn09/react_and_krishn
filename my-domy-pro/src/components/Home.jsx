import React from "react";
import '../App.css';
import cycle from './cycle.png' 

function Home() {
  return (
    <div className="w-full flex justify-center items-center py-15 flex-col">
        <img className="w-100"
         src={cycle} alt="home image" />
         <h1 className="font-bold text-5xl mt-4"
         >Lorem Ipsum YOJO</h1>
    </div>
  )
}

export default Home