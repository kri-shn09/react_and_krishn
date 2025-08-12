import React from 'react'
import UserContext from '../Context.js'
import {useContext } from 'react'

function Login() {
    const [userName , setuserName] = React.useState('');
    const [password,setPassword] = React.useState('');

    const {setUser} = useContext(UserContext)

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