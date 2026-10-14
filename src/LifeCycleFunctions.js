//life cycle functions:-these are the methods or hooks.that runs automatically at different stages of a react component's life,such as when it is created,updated,or removed
//there are classified 3 types

//1.component did mount:-this will be triggred after the component gets mounted to the DOM
//this can be achieved in functional based components using useEffect hook
//useEffect(()=>{},[])

//2.component did update:-this will be triggred after the state will be change in the dependency array
//useEffect(()=>{},[dependency])

//3.component will unmount:-this will be triggred just before the component gets unmounted from DOM
//to cleare the intervels


//example code of these types

import { useEffect,useState } from "react";

function LifeCycleFunctions(){
    const[count,setCount]=useState(0);
    //component did mount
    useEffect(()=>{
        console.log("this is component did mount");

    },[])

    //component did update
    /*useEffect(()=>{
        console.log("this is component did update");
    },[count])*/

 return(
        <div>
            LifeCycleFunctions
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}
export default LifeCycleFunctions;