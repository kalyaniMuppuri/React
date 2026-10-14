//1.

//import { useState } from "react";

/*import './App.css';
function StuedntDetails(){
  const student={
    name:"kalyani",
    age:19,
    grade:"A"
  };
return(
  <div>
    <h1>Name:{student.name}</h1>
    <h1>Age:{student.age}</h1>
    <h1>Grade:{student.grade}</h1>
  </div>
)
}
function App() {
  return (
    <div className="App">
      <h1>this is my first react </h1>
       <StuedntDetails/>
    </div>
  );
}
export default App;*/

//2.

/*import './App.css';
function StudentDetails(){
  let students=[
    {
    name:"kalyani",
    age:20,
    grade:"A"
  },
   {
    name:"reshma",
    age:19,
    grade:"B"
  },
 {
    name:"harshitha",
    age:18,
    grade:"C"
  },
  ]
  
return(
  <div>
    <ul>
      <h1>Students details:</h1>
    {students.map((student)=>{
      return(
      <li>
        <h3>Name:{student.name}</h3>
        <p>Age:{student.age}</p>
        <p>Grade:{student.grade}</p>
      </li>
      
      )
    })}
    </ul>
    </div>

)
}
function App() {
  return(
  <div className="App">
      <h1>this is react project</h1>
      <StudentDetails/>
    </div>
  )
}
export default App;*/





/*if(students.length===0){
    return <h1>no students data avaliablle</h1>
  }*/


    /*let name="kalyani"
  let message=name!==""?( `hello ${name}`):("hello guest");
  return (
    <div className="App">
       <h1>{message}</h1>
    </div>*/



//3.
/*import './App.css;
function ProductList(){
  const products=[
    {id:1,name:'laptop',price:50000},
    {id:2,name:'phone',price:25000},
    {id:3,name:'headphones',price:3000},
]
return(
  <div>
    <h2>Products</h2>
    <ul>
      {products.map(product=>(
        <li key={product.id}>
        {product.name}- Rs.{product.price}
        </li>
      ))}
    </ul>
  </div>
)
}
function App(){
  return(
    <div className="App">
      <h1>this is react project</h1>
      <ProductList/>
    </div>
  )
}
export default App;*/


//-------------------------------------------------------------------------------------------------------------

//importing concept 
//another files into app.js

/*import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

function App(){
  return(
    <React.Fragment>
       <Header/>
       <Footer/>
       <Home/>
    </React.Fragment>
  )
}
export default App;*/


//------------------------------------------------------------------------------------------------------------


//props can only passed from parent to child component but child component cnnot pass props to parent component
//props are immutable
//we cannot modify the props


/*import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
function Student(props){
  return(
    <div>
      <h1>students details:</h1>
      <h1>Name:{props.name}</h1>
      <p>Age:{props.age}</p>
      <p>Dept:{props.dept}</p>
    </div>
  )
}
function App(){
  return(
    <div>
      <Student
      name="kalyani"
      age={19}
      dept="computer science"
      />
      <Student
      name="vijitha"
      age={20}
      dept="mechanical"
      />

    </div>
  )
}
export default App;*/


//6.
/*import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
function Student(props){
  return(
    <div>
      <h1>students details:</h1>
      <h1>Name:{props.name}</h1>
      <p>Age:{props.age}</p>
      <p>Dept:{props.dept}</p>
    </div>
  )
}
function App(){
  const students=[
{name:"kalyani", age:19,dept:"CSE"},
{name:"harshii", age:20,dept:"ECE"},
{name:"sirisha", age:18,dept:"AIML"},
{name:"vijitha", age:22,dept:"mechanical"}
  ]
  return(
     <div>
      {students.map((student)=>{
        return(
          <Student name={student.name} age={student.age} dept={student.dept}/>
        )
      })}
     </div>
  );
}
export default App;*/


//--------------------------------------------------------------------------------------------------------------------

//project 

/*import logo from './logo.svg';
import './App.css';
import React from 'react';
import Booklist from './Booklist';

import harry from "./harry.jpg";
import crime from "./crime.jpg";
import brave from "./brave.jpg";
import hobbit from "./hobbit.jpg";
import lion from "./lion.jpg";
import thriller from "./thriller.jpg";


function App(){
  let books=[
    {
      author:'J.K Rowling',
      title:'Harry potter and the Sorcerer\'s Stone',
      year:1997,
      image:harry
  
    },
    {
      author:'Agatha Christie',
      title:'Crime Story',
      year:1978,
      image:crime
      
    },
    {
      author:'Aldous Huxley',
      title:'Brave New World',
      year:1932,
      image:brave
    
    },
    {
      author:'J.R.R Tolkien',
      title:'the hobbit',
      year:1937,
      image:hobbit
      
    },
    {
      author:'C.S Lewis',
      title:'the lion,the witch and the wardrobe',
      year:1950,
      image:lion
      
    },
     {
      author:'Dan Brown',
      title:'Thriller stories',
      year:1982,
      image:thriller
      
    },

  ]
  return(
    <>
      <h1>My Book Library</h1>
      <Booklist
        books={books}     
         />
    </>
  )
}
export default App;*/

//---------------------------------------------------------------------------------------------------------------------


//state concept

//useState syntax:let[state,useState]={initialvalue};
 //click me button in middle use this className

/*import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';
 
function Button(){
  let [count,setCount]=useState(0);
  function handleClick(){
    console.log("Button clicked",count);
    setCount(count+1)
  }
  return(
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h1>{count}</h1>
    </div>
  )
}
function App(){
  return(
    <div className='App'>
        <Button/>
   </div>
  )
}
export default App;*/

///--------------------------------------------------------------------------------------------------------------

//Increment and Decrement concept

/*import './App.css';
import React from 'react';
import IncrementDecrement from './IncrementDecrement';

function App(){
  return(
    <div className="App">
    <IncrementDecrement/>
    </div>
  )
}
export default App;*/

//LikeButton
/*import './App.css';
import React from 'react';
import LikeButton from './LikeButton';

function App(){
  return(
    <div className="App">
    <LikeButton/>
    </div>
  )
}
export default App;*/

//-----------------------------------------------------------------------------------------------------------

//ToDoList

/*import './App.css';
import React from 'react';
import ToDoList from './ToDoList';



function App(){
  return(
    <div className="App">
    <ToDoList/>
    </div>
  )
}
export default App;*/

//-------------------------------------------------------------------------------------------------------------

// event-handling input elements 

//1.
/*import './App.css';
import React from 'react';
import Login from './Login';
function App(){
  return(
    <div className="App">
    <Login/>
    </div>
  )
}
export default App;*/


//2.
/*import './App.css';
import React from 'react';
import Register from './Register';
function App(){
  return(
    <div className="App">
    <Register/>
    </div>
  )
}
export default App;*/

//------------------------------------------------------------------------------------------------------------

//login and logout

/*import './App.css';
import React from 'react';
import LoginLogout from "./login and logout";

function App(){
  return(
    <div className="App">
<LoginLogout/>
    </div>
  )
}
export default App;*/

//----------------------------------------------------------------------------------------------------------

//userDetails code

//in this code we are using life cycle functions

/*import './App.css';
import React from 'react';
import UserDetails from "./UserDetails";

function App(){
  return(
    <div className="App">
<UserDetails/>
    </div>
  )
}
export default App;*/

//------------------------------------------------------------------------------------------------------------

//LifeCycleFunctions code
/*import './App.css';
import React from 'react';
import LifeCycleFunctions from "./LifeCycleFunctions";

function App(){
  return(
    <div className="App">
<LifeCycleFunctions/>
    </div>
  )
}
export default App;*/

//--------------------------------------------------------------------------------------------------------------------

//Routing concept:-React Router is a library used to handle the navigation in React application
//it allows you to create the multiple pages or views in a single-page application without refreshing the browser
//it is widely used in:
//1.navigating between the pages
//2.building multi-page-style React apps
//handle the dynamic URLs

//Routes:-it is a container that holds all your route definitions
//Route-it is used to define the path
//Link:-it is used to navigate between pages without reloading the browser
//to:-it specifies the destination path

//example:-
/*import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import { Routes,Route,Link } from 'react-router-dom';
import Userinfo from "./pages/Userinfo";
import LoginFile from "./pages/LoginFile";


function App(){

  return(
    <div className="App">
      <nav>
        <Link to='/Home'>Home</Link>
         <Link to='/About'>About</Link>
          <Link to='/Contacts'>Contacts</Link>
      </nav>
      <Routes>

        <Route path='/Home' element={<Home/>}/>

        <Route path='/About' element={<About/>}/>

        <Route path='/Contacts' element={<Contacts/>}/>

        <Route path='/Userinfo/:name' element={<Userinfo/>}/>

        <Route path='/LoginFile' element={<LoginFile/>}/>

        <Route path='*' element={<h1>This is not found</h1>}/>

      </Routes>
    </div>
  )
}
export default App;*/


//----------------------------------------------------------------------------------------------------------------

//child to parent using callbacks using css also

/*import './App.css';
import Input from './TaskManger/Input';
import Toggle from './TaskManger/Toggle';
import TaskList from './TaskManger/TaskList';
import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const TasksContext=createContext();


function App(){
  const [tasks,setTasks]=useState([
    {id:1,description:"Task 1",status:true},
    {id:2,description:"Task 2",status:false},
  ])

  //const[LightMode,setLightMode]=useState(false);
   const[LightMode,setLightMode]=useState(localStorage.getItem('LightMode')==='true'?true:false);

function addTask(task){
    const newTask={
      id:new Date().toString(),
      description:task,
      status:true,
    }

    setTasks([...tasks,newTask])
  }

  function deleteTask(id){
    const newTasks=tasks.filter(task=>task.id!==id);
    setTasks(newTasks)
  }


    function updateTask(id){
    const newTasks=tasks.map((task)=>{
      if(task.id===id){
        return{...task,status:!task.status}
      }
      else{
        return task;
      }
    })
    setTasks(newTasks)
  }

  return(
    <div className={`App ${LightMode?'light-bg':'dark-bg'}`}>
      <div className="container">
        <Toggle LightMode={LightMode} setLightMode={setLightMode}/>
        <Input addTask={addTask}/>
        <TasksContext.Provider value={{tasks,deleteTask,updateTask}}>
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
        </TasksContext.Provider>
      </div>
    </div>
  )
}
export default App;*/


//1. to apply css conditionally
//state uplift:-moving state from child component to their common parent component

//local Storage:-it is a browser storage mechanism used to store the data that remains avaliable even after the browser is closed
//session storage:-it is a browser storage mechanism used to store the data only for the current browser.the data is removed when the tab is closed


//prop drilling:-passing the props from parent to child and child to grand child etc.
//so avoid this process they are 2 ways
//1.context API:-
//2.centralized storage system
//ex:-Redux,Redux toolkit
//othewise code will not be managable

//CURD operations:-
//1.Create or add
//2.Read or get
//3.Update -->Delete or add again
//4.Delete or remove

//-----------------------------------------------------------------------------------------------------------------

//context API concept:-the context API in react is a way to share data across components without passing props
//this is especially useful when many components needs the same data
//without context API developers often use prop drilling,whitch can make the code messy and hard to maintain
//context API is used to avoid the prop drilling
//in this context API main parts are 
//1.createContext:-create a context to share data
//2.provider:-provides the data
//3.useContext:-reads the data from a context


//Examples:-
//1.theme switch
//file name is ThemeButton css also
/*import { createContext,useState} from "react";
import ThemeButton from "./ThemeButton";
import './App.css'

export const ThemeContext=createContext();//this line means to createContext for sharing the data

function App(){
  const[darkMode,setDarkMode]=useState(false);

  return(
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
      <div className={darkMode?'dark':'light'}>
        <h1>hello React!</h1>
      <ThemeButton/>
      </div>
    </ThemeContext.Provider>
  )
}
export default App;*/


//2. User Login
//file name is profile
/*import { createContext,useState } from "react";
import Profile from './Profile';


export const UserContext=createContext();

function App(){
  const[user,setUser]=useState(null);
//here null-->please login
//"kalyani"-->hello kalyani
  return(
    <div className="App">
      <UserContext.Provider value={{user,setUser}}>
        <h1>Login page</h1>
        <Profile/>
      </UserContext.Provider>
    </div>
  )
}
export default App;*/


//3.Language switch
//file name is LanguageSwitcher

/*import { createContext,useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export const LanguageContext=createContext();

function App(){
  const[language,setLanguage]=useState('en');
  //here en-->print english
  //any other languages given in useState print hindi 
  return(
  <div className="App">
    <h1>Language Switcher</h1>
    <LanguageContext.Provider value={{language,setLanguage}}>
      <LanguageSwitcher/>
    </LanguageContext.Provider>
  </div>
  )
}
export default App;*/

//---------------------------------------------------------------------------------------------------------------------

//Custom hooks:-custom hooks are the JS functions.it contains reusable logic for the multiple react components
//it is usually starts with the word is use,like:
//1.useFetch()
//2.useLocalStorage()
//3.useCounter()

//why do we use custom hooks?
//1.to avoid the dupicating code
//2.to keep the components clean
//3.to share the logic between multiple components
//4.easier to maintain

//why custom hooks?
//In react many components may need the same logic such as:
//1.fetching data
//2.managing the local storage
//3.handle the toggles
//instead of writing the same code again and again you can place the logic in a custom hook


//example codes:-
//1.folder is counter
//files:-1.useCounter,Component1,Component2

/*import Component1 from "./Counter/Component1";
import Component2 from "./Counter/Component2";
import "./App.css";

function App(){
  return(
    <div className="App">
      <div className="container">
      <h1>Custom Hook Example</h1>

      <Component1/>
      <Component2/>
    </div>
    </div>
  )
}
export default App;*/


//2.folder name is Toggle
//files 1.useToggle,2.part1,2.part2

/*import Part1 from "./Toggle/Part1";
import Part2 from "./Toggle/Part2";

function App(){
  return(
    <div className="App">
      <h1>Custom hook Example</h1>
      <Part1/>
      <Part2/>
    </div>
  )
}
export default App;*/


//3.folder name is Fetching
//files 1.useFetch2.Example13.Example2


/*import Example1 from "./Fetching/Example1";
import Example2 from "./Fetching/Example2";
function App(){
  return(
    <div className="App">
      <h1>useFetch custom hook</h1>
      <Example1/>
      <Example2/>
    </div>
  )
}
export default App;*/

//-------------------------------------------------------------------------------------------------------------------

//performance-optimization:-it is used to improving an application's speed and efficiency by reducing the unnecessary work
//in this performance-optimization we have to discuss 4 topics
//1.React.memo
//2.useMemo
//3.useCallback
//4.Lazy Loading


//1.React.memo:-React.memo is used to avoid the unnecessary re-rendering of child components when their props have not changed

//when it is used?
//1.child component is heavy
//2.child props does'nt changes
//ex:-
//1.products
//2.complex UI
//3.large tables

//when it is not used?
//1.child component is very samll
//2.child props frequently changes
//example:-file is Child.js


/*import { useEffect, useState } from "react";
import Child from "./Child";

function App(){
  const[count,setCount]=useState(0);
 
 useEffect(()=>{
    console.log("parent is re-rendered")
  },[count])
   
 
  return(
    <div className="App">
      <h1>Count:{count}</h1>

      <button onClick={()=>setCount(count+1)}>Increment</button>
      <Child Count={count}/> 
       
    </div>
  )
}
export default App;*/

//Count={count} when it is used React.memo is useless 
//Child name="kalyani"

//initially 
//parent re-rendered and child is re-rendered

//but when click increment:
//parent is re-rendered 
//child component is not re-rendered because
//1.count-->changed
//1.name-->not changed

//-------------------------------------------------------------------------------------------------------------------

//2.useMemo:-it is a built in react hook.it is used to memoize(remember) a calculated value and avoid the unnecessary recalculations

//when to use useMemo:-
//when you have heavy calculations that run on every re-render

//when not to use useMemo:-
//for simple or fast calculations


//difference between useEffect and useMemo

/*useEffect:-

//used for side effects like,API calls,timers
//runs after component renders
//it can run specific dependencies changes

// useEffect: perform an action
//useEffect(() => {
  //fetchUsers();
//}, []);

useMemo:-
//used to store/memorize a calculated value
//helps to avoid the unnecessary calculations
//recalculates only when its dependencies change

//const activeUsers = useMemo(() => {
  //return users.filter(user => user.active);
//}, [users]);

//Interview shortcut:
 // useEffect = side effects
//  useMemo = memoized values*/


//example1:-heavy calculation

/*import { useMemo, useState } from "react";

function App(){
  const[count,setCount]=useState(0);
  const[number,setNumber]=useState(1)

//heavy calculation
const slowClaculated=(num)=>{
  console.log("Heavy calculation running...");
  for(let i=0;i<1000000000;i++){}  //fake delay
  console.log("calculated");
  return num+1;
};

const result=useMemo(()=>{
  return slowClaculated(number)

},[number])//use this app is fast
//const result=slowClaculated(number); //use this app is slow

return(
  <div>
    <h1>Count:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>

    <h1>Result:{result}</h1>
    <button onClick={()=>setNumber(number+1)}>change number</button>
  </div>
)

}
export default App;*/

//example2:-simple calculation

/*import { useState } from "react";

function App(){
  const[count,setCount]=useState(0);

  //simple calculation
  const result=count*10;
   console.log("calculated");

  return(
    <div>
      <h2>Count:{count}</h2>
      <h2>Result:{result}</h2>

      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
export default App;*/

//-----------------------------------------------------------------------------------------------------------------------

//3.useCallback:-useCallback is a React Hook used to remember (memoize) a function and avoid the recreating function on every renders
//                                   (or)
//every time App renders a new 

//Why use useCallback?
//mainly to avoid the unnecessary functions recreation 

//example:-

/*import React, { useCallback, useState } from "react";
import Child from "./Child";

const App = () => {
    console.log("parent is rendering");

  const [count, setCount] = useState(0);


  const handleChild = useCallback(() => {
    console.log("child is rendering")
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child  child={handleChild}/>
      
    </div>
  );
};

export default App;*/

//-------------------------------------------------------------------------------------------------------------------------------------

//4.Lazy Loading:-lazy-loading loads components only when it is needed,instead of the loading at beginning
//or 
// load component only when needed

//fallback:-it is the temporary UI displayed while a lazy-loaded component is loaded
//Suspense:-it is used to display the fallback UI while a lazy-loaded component is loaded

//folder is pages
//files 1.home 2.about 3.contacts

/*import {lazy,Suspense,useState} from "react";

const Home =lazy(()=>import("./pages/Home"))
const About =lazy(()=>import("./pages/About"))
const Contacts =lazy(()=>import("./pages/Contacts"))


function App(){
  const[page,setPage]=useState("")

  return(

    <div>
      <nav>

        <button onClick={()=>setPage("home")}>Home</button>

        <button onClick={()=>setPage("about")}>About</button>

        <button onClick={()=>setPage("contacts")}>Contacts</button>

      </nav>

      <Suspense fallback={<h2>Loading Page...</h2>}>

      
        {page==="home" && <Home/>}
          {page==="about" &&<About/>}
       {page==="contacts" && <Contacts/>}
       </Suspense>

      </div>
  )
}
   export default App;*/
   
   
   //the main difference between Router and lazy loading

   //1.Router:-
   //1.used to navigate between the pages or components
   //2.it decides the which component to show for a URL
   //mainly uses react-router-dom

   //2.Lazy-Loading:-
   //1.used to load the components only when needed
   //2.it decides when component's code should be downloaded
   //mainly uses React.lazy() and <Suspense>

   //Remember
   //1.Router -->where to go?
   //2.Lazy-Loading -->when to load?


//------------------------------------------------------------------------------------------------------------------------------------------

//this is useReducer hook


//what is useReducer?
//it is a react hook used to manage state with more complex update logic
//it works the main things
//1.State:-stores the current value
//2.dispatch:-sends an action
//3.reducer:-decides how the state should change

//important rules:-
//1. Call useReducer only at the top level of a component.
//Do not call hooks inside loops, conditions, or nested functions.
//A reducer should be a pure function.
//Do not perform API calls inside a reducer.
//Return the current state for unsupported actions
//Use descriptive action types such as todoAdded or requestFailed.
//Do not mutate state directly


//use useState:-
//1.the state is simple
//2.they are only a few update cases
//3.the update logic is easy to understand

//use useReduser:-
//1.the state has a multiple related fields
//2.many actions update the same actions
//components need clear,

   /*import Counter from "./Counter";

   function App(){
    return(
      <div>
        <h1>Counter App</h1>
        <Counter/>
      </div>
    )
   }

   export default App;*/

//--------------------------------------------------------------------------------------------------------------------------------------  

/*useState: Used to manage component state.
useEffect: Used to handle side effects.
useMemo: Memoizes a calculated value.
React.memo: Prevents unnecessary component re-renders.
useReducer: Manages complex state logic.
useCallback: Memoizes a function.
Mutable: Original data can be changed.
Immutable: Original data is not changed.
Lazy Loading: Loads components only when they are needed.*/


//---------------------------------------------------------------------------------------------------------------------------------------


/*GET → data retrieve
POST → new data add
PUT → data update entire
PATCH -> single property update
DELETE → data delete*/

/*import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const url = "http://localhost:3000/users";

  const [users, setUsers] = useState([]);


    GET
  
   async function fetchUser() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);


  function addNewUser(){
    console.log("button clicked")
    const newUser = {
      id:5,
      name: "Peter",
      address: {}
    }


      /*POST
    
      try{
      const response = fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser)
      })
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="App">
      {users.map((user) => {
        return <h1>{user.name}</h1>;
      })}

      <button onClick={()=>addNewUser()}>Add new User</button>
    </div>
  );
}

export default App;*/


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


/*import Example from "./examplePrograms";

function App(){
  return(
    <div className="App">
      <Example/>
    </div>
  )
}
export default App;*/