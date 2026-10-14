import { useContext, useState } from "react";
import { UserContext } from "./App";

function Profile(){
    const{user,setUser}=useContext(UserContext);

    return(
        <button onClick={()=>setUser(!user)}>
        {user?`hello ${user}`:'please login'}
        </button>
    )
}
export default Profile;