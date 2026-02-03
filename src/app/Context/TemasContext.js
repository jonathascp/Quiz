"use client";

const { createContext, useState, useContext } = require("react");

const TemasContext = createContext();

export const TemasProvider = ({children}) => {
    const [tema,setTema] = useState(null);

    return (
        <TemasContext.Provider value={{tema, setTema}}>
            {children}
        </TemasContext.Provider>
    )
}

export const useTema = () => {
    return useContext(TemasContext);
}