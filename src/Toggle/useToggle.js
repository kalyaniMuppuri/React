import { useState } from "react";

function useToggle(){
    const[on,setOn]=useState(false);

    const toggle=()=>{
        setOn(prev=>!prev);
    }
    return{ on,toggle };
}
export default useToggle;