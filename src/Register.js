
import { useState } from "react";
function Register(){
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");
    const[age,setAge]=useState("");

    const[error,setError]=useState("");
    const[success,setSuccess]=useState("");
  function handleClick(e){
      e.preventDefault();
  }
    function handleSubmit(){
       
        setError("");
        setSuccess("");
        
        if(
            firstName==="" || lastName==="" || email==="" || password==="" || confirmPassword==="" || age==="" )
        {
           setError("please fill the all fields");
            return;
        }
         if(password!==confirmPassword){
            setError("password and confirmPassword should match");
            return;
        }
        if(!email.includes("@") || !email.includes(".")){
            setError("please enter the valid email");
            return;
        }
         if((age)<13){
            setError("Age should be 13 or above");
            return;
        }
        setSuccess("Registration successful");
       
    }
    return(
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleClick}>
            <input
            type="text" 
            placeholder="First Name"
            value={firstName}
            onChange={(event)=>setFirstName(event.target.value)}
            />
            <br/><br/>

            <input
            type="text" 
            placeholder="Last Name"
            value={lastName}
            onChange={(event)=>setLastName(event.target.value)}
            />
            <br/><br/>

            <input
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            />
            <br/><br/>

            <input
            type="password" 
            placeholder="password"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            />
            <br/><br/>

            <input
            type="password" 
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(event)=>setConfirmPassword(event.target.value)}
            />
            <br/><br/>

            <input
            type="number" 
            placeholder="Age"
            value={age}
            onChange={(event)=>setAge(event.target.value)}
            />
            <br/><br/>
            
             <button onClick={()=>handleSubmit()}>Register</button>
              {error && <p style={{color:"Red"}}>{error}</p>}
                {success && <p style={{color:"Green"}}>{success}</p>}
                 </form>
        </div>
       
           
        
    );
    
}
export default Register;




