
/*import { useState } from 'react';
//1.how to add,update,delete the items in list
function Example(){
const[tasks,setTasks]=useState([
    {id:1,name:"kalyani",status:true},
    {id:2,name:"reshma",status:true},
    {id:3,name:"harshitha",status:true},
])
const[name,setName]=useState("vijitha")
//add
function addTask(){
    const newTask={
        id:Date.now(),
        name:name,
        status:true
    }
    setTasks([...tasks,newTask])
}
//delete
function deleteTask(id){
    const newTasks=tasks.filter((task=>task.id!==id))
    setTasks(newTasks)
}
//update
function updateTask(id){
    const newTasks=tasks.map((task)=>{
        if(task.id===id){
            return{...task,name:"vijitha"}
        }else{
            return task
        }
    })
    setTasks(newTasks)
}

return(
    <div>
        {tasks.map(task=><p key={task.id}>{task.name}</p>)}
        <button onClick={()=>addTask()}>Add</button>
        <button onClick={()=>{deleteTask(2)}}>delete</button>
        <button onClick={()=>{updateTask(1)}}>update</button>


    </div>
)
}
export default Example;*/