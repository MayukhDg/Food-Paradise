"use client"

import { createContext, useState } from "react"


export const GlobalContext = createContext();


const Context = ({  children })=>{
   
    const [cartItems, setCartitems] = useState([])
    const [cartValue, setCartValue] = useState(0);

    return (
       <GlobalContext.Provider value={{cartItems, setCartitems, cartValue, setCartValue}} >
         { children }
       </GlobalContext.Provider>
    )
}


export default Context;