import React from "react";
import '../App.css'

function Footer() {
  return (
    <div className="w-full px-30 py-10 flex justify-evenly items-center bg-gray-200">
        <div className="footer-logo-box">
            <img className="w-55 bg-inherit"
             src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="logo img " />
        </div>
        <div className="footer-info-box flex justify-evenly items-center">
            <ul className="footer-info-one flex justify-center items-center flex-col"
            >
                <h4 className="font-bold mb-3">Resources</h4>
                <li className="mb-2 font-medium">Home</li>
                <li className="mb-2 font-medium">About</li>
            </ul>
            <ul className="footer-info-two flex justify-center items-center flex-col">
                <h4 className="font-bold mb-3">Follow Us</h4>
             <li className="mb-2 font-medium">GitHub</li>
             <li className="mb-2 font-medium">Discord</li>
            </ul>
            <ul className="footer-info-three flex justify-center items-center flex-col">
                <h4 className="font-bold mb-3">Legal</h4>
                  <li className="mb-2 font-medium">Privacy policy</li>
                   <li className="mb-2 font-medium">Terms & Condition</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer