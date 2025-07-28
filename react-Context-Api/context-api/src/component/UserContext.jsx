import React from 'react'
import useContext from '../Context'

function UserContext({children}) {
    const [user,setUser] = React.useState(null)
  return (
    <useContext.Provider value={{user,setUser}} >
       {children}
    </useContext.Provider>
  )
}

export default UserContext