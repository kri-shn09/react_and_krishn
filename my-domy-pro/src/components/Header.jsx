import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'


function Header() {
  return (

    <div
     className="w-full flex justify-evenly items-center px-40 py-3 nav-box">
        <div className="logo-box">
            <img 
            className='w-45 cursor-pointer'
             src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo img" />
        </div>
        <div className="nav-items-box">
            <ul className='w-full flex justify-evenly items-center list-none font-bold'>
              <li className='cursor-pointer'>
              <NavLink
              to="/"
                className = {
                 ({isActive}) =>
                ` ${isActive ? "text-orange-500" : 'text-black'} `
              } >
                Home
                </NavLink> </li>
                <li className='cursor-pointer' >
                  <NavLink
                  to="/about"
                   className={
                      ({isActive}) =>
                      `${isActive ? "text-orange-500" : "text-black"}`
                  }>
                    About
                  </NavLink>
                </li>
                <li className='cursor-pointer' >
                  <NavLink
                  to='/contact'
                   className={({isActive})=>
                        `${isActive ? "text-orange-500" : "text-black"}`
                  }>
                         Contact
                    </NavLink>
                
                  </li>
                <li className='cursor-pointer' >GitHub</li>
            </ul>
        </div>
        <div className="nav-btn-box flex justify-evenly items-center">
            <p className='font-bold cursor-pointer text-xl'>Log in</p>
            <button
             className=' py-2 cursor-pointer px-3 bg-orange-600 rounded-sm font-medium text-white'>
                Get Started</button>
        </div>
     </div>

  )
}

export default Header