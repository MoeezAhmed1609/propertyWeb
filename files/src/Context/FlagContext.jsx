import React, { createContext, useState } from 'react'


export const FlagContext = createContext();


export const FlagProvider = ({ children }) => {

    const [Flag, setFlag] = useState(false);
    const FlagTrue = () => {
        setFlag(!Flag)
    }
    return (
        <FlagContext.Provider value={{ Flag, FlagTrue }}>
            {children}
        </FlagContext.Provider>
    )
}