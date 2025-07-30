import React, { useState } from "react";

const UseCustomHook = () => {
    const [userInput , setUserInput] = useState([]);
    const setItems = localStorage.setItem(myTask ,  JSON.stringify(userInput)); 


}
