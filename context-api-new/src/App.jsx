
import { useEffect, useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import { UserContextProvider } from './createContext/UserContext'
import React from 'react'

function App() {
  const [themeMode , setIsdark] = useState(false)

  const askIsdark = ()=>{
   const pageBody = document.querySelector("body");
    setIsdark(prev => !prev)
    if(themeMode == false)
    {
      pageBody.className = "text-white"
    }
    else{
          pageBody.className = "text-black"
    }
    }

  useEffect( ()=>{
    askIsdark;
  },[themeMode] )

  return (
    <UserContextProvider value={{themeMode,askIsdark}} >
     <Cart />
         </UserContextProvider>
  )
}

export default App
