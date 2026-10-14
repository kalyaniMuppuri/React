import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

function Userinfo(){
    const[data,setData]=useState({name:"kalyani"})
    const params=useParams();//it is used to read the value from the URL
    console.log(params)
    

    const UserLogin=true;
    //give true print in return statement
    //give false move to login page
    const navigate=useNavigate();//is used to navigate the route programatically
    //that means go to another page directly


    useEffect(()=>{
        if(!UserLogin){
            navigate('/UserLogin')
        }
    },[])
    return(
        <div>
            hi,{data.name} how are you?
        </div>
    )
}
export default Userinfo;