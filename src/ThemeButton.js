import { useContext } from "react";
import { ThemeContext } from "./App";

function ThemeButton(){
    const{darkMode,setDarkMode}=useContext(ThemeContext);

    return(
        <button onClick={()=>setDarkMode(!darkMode)}>
            {darkMode?'switch light mode':'switch dark Mode'}
        </button>
    )
}
export default ThemeButton;