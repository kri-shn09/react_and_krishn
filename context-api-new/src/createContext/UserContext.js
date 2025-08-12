import React from "react";

export const UserContext = React.createContext(
    {
    themeMode : false,
    askIsdark : ()=>{},
    } 
);

export const UserContextProvider = UserContext.Provider;

export const useTheme = ()=>{
    return React.useContext(UserContext)
}

