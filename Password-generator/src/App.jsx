
 import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
//   const initialState = {count:0}
//   const reducer = (state,action)=>{
//      switch(action.type){
//       case "Increase" :{
//        return {count : state.count+1}
//       }
//       case 'Decrease' :{
//         if(state.count > 0){
//            return {count: state.count - 1}
//         }
//       }
//       default:{
//         return {count:state.count = 0}
//       }
//      }
//   }
// const [state,dispatch] = useReducer(reducer,initialState) 
   const [length , setLength] = useState(8);
   const [allowNum , setNum] = useState(false);
   const [allowChar , setChar] = useState(false);
   const [password , setPassword] = useState("")
   const myInput = useRef(null)
     
    const changeAll = useCallback(()=>{
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(allowNum) str += "0123456789";
      if(allowChar) str += "@!#$%^&*(){}?><";
      
      for(let i=1;i<=length;i++)
      {
       let randomNum =  Math.floor(Math.random() * str.length + 1)
       pass += str.charAt(randomNum)
       
      }
      setPassword(pass)
    },[length,allowNum,allowChar,setPassword])

    const copyToClipboard = useCallback(()=>{
      myInput.current ?.select()
        window.navigator.clipboard.writeText(password);
    },[password])

    useEffect(()=>{
       changeAll()
    },[length,allowNum,allowChar,setPassword])

  return (
    <>

    <div
     className="w-2xl  bg-gray-700 py-10">
      <h1
       className="text-orange-600 text-4xl text-center">Password Generator
       </h1>

      <div
       className="w-full flex justify-center items-center">

        <input ref={myInput}
          type="text" value={password}
         className="w-130 h-10 bg-amber-50 my-5 px-2 text-xl text-orange-500 outline-0" readOnly />
         <button onClick={copyToClipboard}
          className="text-white h-10 px-3 text-2xl bg-blue-600">Copy</button>
      </div>

      <div className="w-full flex justify-around items-center">
        <div className="flex items-center gap-2">
        <input className='cursor-pointer'
         type="range" onChange={(e)=> {setLength(e.target.value)}}
        value={length} min={8} max={100} />
         <label
         className='text-white' >Length : {length}</label>
          </div>
          <div className="flex items-center gap-0.5">
        <input onChange={()=> setNum((prev) => !prev)}
        defaultChecked = {allowNum}
        type="checkbox" className='w-10 h-5' />
         <label className='text-white'>NumberAllow</label>
        </div>
          <div className="flex items-center gap-0.5">
        <input onChange={()=> setChar(prev => !prev)}
         defaultChecked = {allowChar}
         type="checkbox" className='w-10 h-5' />
         <label className='text-white'>CharAllow</label>
        </div>
      </div>
      </div>   

        {/* <div
         className="w-50 flex justify-evenly items-center">
         <h1>{state.count}</h1> <br />
         
         <button onClick={()=>dispatch({type: 'Increase'})}
          className="px-1 py-0.5 text-20 border-2">Increase
          </button>
        <button onClick={()=>dispatch({type: 'Decrease'})}
          className="px-1 py-0.5 text-20 border-2">Decrease
          </button>
          </div>  */}
    </>
  )
}

export default App
