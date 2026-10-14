import { useContext } from "react";
import { LanguageContext } from "./App";

function LanguageSwitcher(){
    const{language,setLanguage}=useContext(LanguageContext);

    return(
        <button onClick={()=>setLanguage(!language)}>
            {language==='en'?'english':'hindi'}
        </button>
    )
}
export default LanguageSwitcher;