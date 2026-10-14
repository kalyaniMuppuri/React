import { useEffect,useState } from "react";

function UserDetails(){
    const[users,setUsers]=useState([]);
    const[refetch,setRefetch]=useState(false);
   
    async function fetchDetails(){
        try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await response.json();
        setUsers(data);
        }
        catch(error){
            console.log(error)
        }
    }
    //this is called component did update
    useEffect(()=>{
        fetchDetails();
    },[refetch])

    function deleteUser(id){
        const newUsers=users.filter((user)=>user.id!==id);
        setUsers(newUsers)
    }
    return(
            <div>
                <div>
                     {users.map((user)=>{
                    return(
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <button onClick={()=>deleteUser(user.id)}>delete</button>
                            </div>)
                             })}
            </div>
            <button onClick={()=>setRefetch(!refetch)}>Reset</button>
            </div>
           
    )
}
export default UserDetails;