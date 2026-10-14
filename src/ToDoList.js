/*import { useState } from "react";
function ToDoList(){
    const[id,setId]=useState(5)
     const items=[
        {
            id:1,
            name:"rice"
        },
         {
            id:2,
            name:"milk"
        },
         {
            id:3,
            name:"cooking oil"
        },
         {
            id:4,
            name:"vegitables"
        },
         {
            id:5,
            name:"fruits"
        }
    ]
     const [list,setList]=useState(items);


    function addItem(){
        let newObj={
            id:id,
            name:"New item ${id}"
        }


        let updatedList=[...list,newObj];
        setId(id+1)
        setList(updatedList);
     }


     function deleteItem(id){
          let filteredList=list.filter((item)=>item.id!==id)
          setList(filteredList);
     }


     return(
        <div>
            <button className="add-button" onClick={()=>addItem()}>Add new Item</button>
        <ul>
           {list.map((item)=>(
            <li key={item.id}>
                {item.name}
                <button className="delete-button" onClick={()=>deleteItem(item.id)}>Delete</button>
            </li>
           ))}
        </ul>
        </div>
     )
}
export default ToDoList;*/



import { useState } from "react";
function ToDoList(){
    const[id,setId]=useState(5);
    const[task,setTask]=useState("");
    const[list,setList]=useState([]);


    function deleteItem (taskId){
         let filteredList=list.filter((listitem)=>listitem.id!==taskId)
          setList(filteredList);
     }

     
     function addItem(){
        let newTask={
            id:id,
            description:task
        }
         let newArray=[...list,newTask];
        setId(id+1)
        setList(newArray);
        setTask("");
       
     }
       return(
        <div>
            <input type="text"
            placeholder="enter the task description"
            value={task}
            onChange={(event)=>setTask(event.target.value)}/>
            <button className="add-button"  disabled={task===""} onClick={()=>addItem()}>Add new Item</button>
        {list.length!==0?(<ul>
           {list.map((listitem)=>{
            return <li key={listitem.id}>
                {listitem.description}
                <button className="delete-button" onClick={()=>deleteItem(listitem.id)}>Delete</button>
            </li>
        })}
        </ul>):<h2>no more tasks</h2>}
        </div>
)
}
export default ToDoList;

        