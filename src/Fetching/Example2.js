import useFetch from "./useFetch";

function Example2(){
    const{data,loading,error}=useFetch("https://jsonplaceholder.typicode.com/posts");

    if(loading){
        return  <p>Loading....</p>
    }
     if(error){
        return <p>{error}</p>
    }

    return(
        <div>
            <h2>Example 2</h2>
                {data.map(post=>{
                    return(
                <div key={post.id}>
                       <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        
                  
                </div>
                    )
            })}
        </div>
    )
}
export default Example2;


//1. https://jsonplaceholder.typicode.com/users{user.id,user.name,user.email,user.phone}
//2. https://jsonplaceholder.typicode.com/posts{post.id,post.title,post.body}
//3. https://jsonplaceholder.typicode.com/todos{todo.id,todo.title,todo.completed,todo.userId}

 {/*{data.map((todo) => {
        return (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>ID: {todo.id}</p>
            <p>
              Status: {todo.completed ? "Completed" : "Not Completed"}
            </p>
            </div>
        )}
    )}*/}
            