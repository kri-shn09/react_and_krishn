import React from 'react';
import '../App.css'
import logo from './images/logo1.jpg'

function Header() {
  return (
    <div
     className='px-30 py-2 main-con flex justify-evenly items-center'>
        <div
         className="nav-f-con">
            <img
            className='w-15 h-15 rounded-full'
             src={logo} alt="logoImg" />
         </div>
        <ul
         className='nav-s-con flex justify-evenly items-center font-medium cursor-pointer'>
            <li>Home</li>
            <li>About</li>
            <li>GitHub</li>
            <li>Contact</li>
            <li className='font-bold'>Log in</li>
            <button
            className='bg-yellow-600 text-white font-bold px-3 py-2 rounded cursor-pointer'
            >Get Started</button>
        </ul>
     </div>
  )
}

export default Header