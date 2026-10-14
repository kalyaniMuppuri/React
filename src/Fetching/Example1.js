import useFetch from "./useFetch";

function Example1(){
    const{data,loading,error}=useFetch("https://jsonplaceholder.typicode.com/users");
       
    if(loading){
        return <p>Loading....</p>
    }
     if(error){
        return <p>{error}</p>
    }

    return(
        <div>
            <h2>Example 1</h2>
                {data.map(user=>{
                    return(
                <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.phone}</p>
                  
                </div>
                    )
            })}
        </div>
    )
}
export default Example1;