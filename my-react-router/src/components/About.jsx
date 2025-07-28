import React from 'react'
import about from './about-picture.jpg'
import '../App.css'
function About() {
  return (
    <div className="py-13 px-20  w-full flex justify-evenly items-center">
        
                  <div className="about-img-box">
                      <img className='w-80 h-80'
                          src={about}
                          alt="image"
                      />
                  </div>
                  <div className="about-content-box">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-3xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600 text-center">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600 text-center">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
        
      </div>
  )
}

export default About