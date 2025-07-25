import  { useState } from 'react'
import './App.css'
import InputBox from './component/InputBox'
import useCustomHook from './hook/useCustomHook'

function App() {
  
   const [amount , setAmount] = useState(0);
   const [from , setFrom] = useState('USD')
   const [to , setTo ] = useState('INR')
   const [convertedAmount , setConvertedAmount] = useState(0)

   const currencyOption = useCustomHook(from)
   const options = Object.keys(currencyOption)
   
  const convert = () =>{
    setConvertedAmount(amount * currencyOption[to])
  }
  return (
    <>
        <div className="w-3xl h-auto px-2xl py-10 flex justify-center
         items-center flex-col rounded-xl bg-gray-400">
       <h1 className='text-4xl font-extrabold text-white text-center mb-10'>Currency Converter</h1>
       
        <InputBox 
          label= "From"
          amount = {amount}
           currencyOptions={options}
           onAmountChange={(amount)=> setAmount(amount)}
           onCurrencyChange={(currency) => setFrom(currency)}
  
        />
        
         <div className="m-2 text-white text-xl">
          <i className="fas fa-long-arrow-alt-up"></i> <i className="fas fa-long-arrow-alt-down"></i>
        </div>

          <InputBox
          label = "To"
          amount={convertedAmount}
          onCurrencyChange={(currency)=> setTo(currency)}
         currencyOptions={options}
         amountDisable = {true}
          selectCurrency={to}
          />

        <button
        onClick={convert}
         className='mt-10 text-white text-xl bg-blue-700 px-11 py-4 rounded-2xl cursor-pointer'>
          Convert {from} To {to}
        </button>
        </div>
    </>
  )
}

export default App
