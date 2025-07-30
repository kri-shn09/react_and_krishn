import { useEffect, useState } from 'react'

import './App.css'

function App() {
  
   useEffect( ()=>{
    const allInputs = document.querySelectorAll('input');
   const allChechBox = document.querySelectorAll('.checkBox') ;
   const warning = document.querySelector('p');
       allChechBox.forEach( (checkbox) =>{
        checkbox.addEventListener('click', (evt)=>{
          evt.preventDefault();
          allInputs.forEach( (inputs) =>{
            if(inputs.value === "")
            {
               checkbox.style.backgroundColor = "white";
               warning.style.display = "block";
            }
            else{
              checkbox.style.backgroundColor = "green"
            }
          } )
        })
       } )
   } )

  return (
    <>
     <div
      className="w-full h-screen flex justify-center items-center flex-col">
        <h1 className='text-3xl font-bold'>What TO Do Today</h1>
        <div className='main-con'>
          <div className="w-full flex items-center justify-start">
          <h1
           className='text-3xl font-bold text-gray-900 inline-block '>
            Today
              </h1>
              <i className="fas fa-sun text-yellow-400 mx-1 text-3xl"></i>
              </div>
              <div
               className="w-full flex justify-center items-center px-1/2 mt-8">
                <div className="w-full h-8 rounded-3xl border-2 border-gray-500">
                  <div className='w-0 bg-green-600 h-full rounded-3xl'></div>
                </div>
               </div>
               <p className='text-red-600 text-20 mt-2 hidden'>Please Fill All the Task</p>

               <form
                className='w-full mt-5 rounded-xl'>
                  <div
                   className="w-full flex justify-between items-center">
                   <div className="grn-icon-box">
                    <div
           className='w-5 h-5 rounded-full border-2 border-gray-800 cursor-pointer checkBox
           flex justify-center items-center'>
            <i className="fas fa-check text-white checkIcon"></i>
           </div>
                   </div>
                    <input
            className='w-full pl-3 py-2 outline-0 '
            type="text"
            placeholder='Add Your Task Here'
            />
                   </div>
                  <div
                   className="w-full flex justify-between items-center">
                   <div className="grn-icon-box h-5">
                    <div
           className='w-5 h-5 rounded-full border-2 border-gray-800 cursor-pointer checkBox 
            flex justify-center items-center'>
            <i className="fas fa-check text-white checkIcon"></i>
           </div>
                   </div>
                    <input
            className='w-full pl-3 h-5 outline-0 '
            type="text"
            placeholder='Add Your Task Here'
            />
                   </div>
                  <div
                   className="w-full flex justify-between items-center">
                   <div className="grn-icon-box">
                    <div
           className='w-5 h-5 rounded-full border-2 border-gray-800 cursor-pointer checkBox
            flex justify-center items-center'>
            <i className="fas fa-check text-white checkIcon"></i>
           </div>
                   </div>
                    <input
            className='w-full pl-3 py-2 outline-0 '
            type="text"
            placeholder='Add Your Task Here'
            />
                   </div>
                </form>
        </div>
      </div>
    </>
  )
}

export default App
