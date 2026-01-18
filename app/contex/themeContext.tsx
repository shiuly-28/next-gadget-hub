"use client"
import { createContext, useEffect, useState } from "react";

interface ThemeContextType {
isDarkMode:boolean;
toggleTheme:() => void;
}
export const ThemeContext = createContext< ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}:{children: React.ReactNode}) => {
    const [isDarkMode, setDarkMode] = useState(false)

    const toggleTheme = () => {
        setDarkMode(!isDarkMode)
    }

    useEffect (() => {
        if(isDarkMode){
            document.body.classList.add('dark')
        }else{
            document.body.classList.remove("dark")
        }
    }, [isDarkMode])

    return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}