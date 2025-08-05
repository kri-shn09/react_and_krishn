import React from 'react';
import '../App.css';
import logo from './images/logo1.jpg';

function Footer() {
  return (
    <div className='footer-main-con
     flex justify-evenly items-center py-6 px-15 bg-gray-200'>

        <div className="foot-f-con flex justify-center items-center">
            <img className='w-20 h-20 rounded-full'
             src={logo} alt="logo-img" />
        </div>

        <div className="foot-s-con flex justify-evenly items-center">
            <ul className='font-medium'>
            <p className='font-bold mb-2'>Resources</p>
             <li className='mb-1'>Home</li>   
             <li className='mb-1'>About</li>   
             <li className='mb-1'>Contact</li>   
            </ul>
            <ul className='font-medium'>
                <p className='font-bold mb-2'>Contact Us</p>
                <li className='mb-1'><address>PHONE - 74xxxxxx59</address></li>
                <li><address>Email - guxxxx@gmail.com</address></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer