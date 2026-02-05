"use client";

import { createContext, useState, useContext } from "react";
const TemasContext = createContext();

export const TemasProvider = ({children}) => {
    const [tema,setTema] = useState("");

    return (
        <TemasContext.Provider value={{tema, setTema}}>
            {children}
        </TemasContext.Provider>
    )
}

export const useTema = () => {
    return useContext(TemasContext);
}