import React, { createContext, useState } from 'react'


export const FlagContext = createContext();


export const FlagProvider = ({ children }) => {

    const [Flag, setFlag] = useState(true);
    const FlagTrue = () => {
        setFlag(true)
    }
    const FlagFalse = () => {
        setFlag(false)
    }
    return (
        <FlagContext.Provider value={{ Flag, FlagTrue, FlagFalse }}>
            {children}
        </FlagContext.Provider>
    )
}