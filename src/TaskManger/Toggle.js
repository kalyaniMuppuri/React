import ToggleOff from '@mui/icons-material/ToggleOff';
import ToggleOn from '@mui/icons-material/ToggleOn';
import { useState } from "react";

function Toggle(props){
    {/*const[LightMode,setLightMode]=useState(false);*/}
    const{LightMode,setLightMode}=props;
    return(
        <div className='toggle-container'>
            <button className='toggle-button' onClick={()=>{setLightMode(!LightMode)}}>
                {/*localStorage.setItem('LightMode',!LightMode)*/}
           {LightMode?<ToggleOff className='toggle-icon'/>:<ToggleOn className='toggle-icon'/>}    
        </button>
        </div>
    )
    
}
export default Toggle;