
import { useState } from "react";
import Button from './Button';
function Input(props){
    const {addTask}=props;

    const[input,setInput]=useState('');

    function buttonClicked(){
        //without const line we call the input props.addTask(input) number of times
        addTask(input);
        setInput('')
    }
    
    return(
        <div className="input-container">
            <input type="text"  placeholder="Enter your task"  className="input" value={input}
            onChange={(e)=>setInput(e.target.value)}/>
           <Button text={"Add"} type={"add"} operation={buttonClicked}/>
        </div>
    )
}
export default Input;