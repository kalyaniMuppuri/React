import { useState} from "react";
function LoginLogout(){
    const[login,setLogin]=useState(false)
    return(
        <div>
            {login?<p>Welcom back!</p>:<p>please login</p>}
            <button onClick={()=>setLogin(!login)}>
            {login?"logout":"login"}
            </button>
        </div>
    )
}
export default LoginLogout;

