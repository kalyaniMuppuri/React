import { useState } from "react";
function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
    const[success,setSuccess]=useState("")

        function handleSubmit(){
            setError("")
            setSuccess("")
            if(email==="" || password===""){
                console.log("enter email and password")
                setError("enter email and password")
                return
        }

            console.log("login successfully");
            console.log("email:",email);
            console.log("passoword:",password);
            setSuccess("login successfull");


        }
        return(
            <div>
                <input type="text" 
                placeholder="email"
                value={email}
                onChange={(event)=>{setEmail(event.target.value)}}
                /><br/>

                <input type="password" 
                placeholder="password"
                onChange={(event)=>{setPassword(event.target.value)}}/>
                <br/>

                <button onClick={()=>handleSubmit()}>Login</button>
                
                {error && <p>{error}</p>}
                {success && <p>{success}</p>}

            </div>
        )
}
export default Login;






