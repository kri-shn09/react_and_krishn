import React, { useContext } from 'react'
import UserContext from '../Context'

function Profile() {
     const {user} = useContext(UserContext)
  
    if(!user) return <div><h1>Please Sign Up</h1></div>
    return <h1>{user.userName}</h1>
}

export default Profile