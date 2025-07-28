import React from 'react'
import useContext from '../Context.js'
import { useState,useContext } from 'react'

function Login() {
    const [userName , setuserName] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(useContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({userName,password})
    }
  return (
    <div>
        <input onChange={(evt)=> setuserName(evt.target.value)}
         type="text"
         placeholder='Enter User Name'
          value={userName} />
        <input onChange={(evt)=> setPassword(evt.target.value)}
         type="text" 
         placeholder='Enter Your Password'
          value={password} />
      <button onClick={handleSubmit}>Click Me</button>
    </div>
  )
}

export default Login