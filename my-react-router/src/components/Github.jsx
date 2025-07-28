import React from 'react'
import '../App.css'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
  return (
    <div
     className='git-main-con flex justify-center items-center flex-col py-5'>
<div
style={{ backgroundImage: `url(${data.avatar_url})` }}
 className=" w-70 h-70 border-4 border-white img-box ">
 </div>
 <h1 className='mt-5 text-3xl font-medium'>Name : {data.name}</h1>
  <h1 className='mt-5 text-3xl font-medium'>Followers : {data.followers} </h1>
    </div>
  )
}

export default Github

export const myProfileInfo = async ()=>{
   const res =await  fetch('https://api.github.com/users/kri-shn09');
   return res.json();
}