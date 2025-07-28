import React, { useContext } from 'react'
import useContext from '../Context'

function Profile() {
     const {user} = useContext(useContext)
  
    if(!user) return <div><h1>Please Sign Up</h1></div>
    return <h1>{user.userName}</h1>
}

export default Profile