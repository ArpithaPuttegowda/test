import { createContext, useContext, useState } from "react"

const ThemeContext=createContext()
const ThemeComp=()=>{
    const[theme,setTheme]=useState("light")
    return <>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <ToolBar/>
      </ThemeContext.Provider>
    </>
}

export default ThemeComp;

const ToolBar=()=>{
    const {theme,setTheme}=useContext(ThemeContext)
    const handleToggleTheme=()=>{
        setTheme(theme==="light"?"dark":"light")
    }
    return <>
    <button onClick={handleToggleTheme}>Toggle Theme</button>
    <h1 style={{background:theme==="light"?"lightgray":"darkgray"}}>Current Theme:{theme}</h1>
    </>
}