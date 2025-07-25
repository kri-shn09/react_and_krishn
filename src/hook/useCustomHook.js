import React, {useEffect, useState} from 'react'

function useCustomHook(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
   
    fetch(`https://v6.exchangerate-api.com/v6/e0003802657fd1266117d8b3/latest/${baseCurrency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.conversion_rates);
      }) 
  }, [baseCurrency]);

  return data;
}

export default useCustomHook;

