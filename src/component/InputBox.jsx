import React from 'react'
import App from '../App'

function InputBox({
    label,
    amount ,
    onAmountChange ,
    onCurrencyChange ,
    currencyOptions = [],
    amountDisable = false,
    selectCurrency 
}) {


  return (
    <>
       <div
         className="w-2xl flex justify-between items-center px-10 py-3  bg-white rounded-2xl">
          <div className="w-1xl flex flex-col ">
            <label className='mb-3 text-40 font-medium'>{label}</label> 
            <input type="number"
            disabled={amountDisable}
             value={amount}
             onChange={(e) => onAmountChange &&  onAmountChange(Number(e.target.value))}
              className='w-1xl h-10 outline-0'
             />
          </div>

          <div className="w-1xl flex flex-col">
            <label className='mb-4 text-40 font-medium'>Currency Type</label> 
            <select className='outline-0'
              value={selectCurrency}
            onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
            > 

             {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
              
            </select>
          </div>

         </div>
    </>
  )
}

export default InputBox