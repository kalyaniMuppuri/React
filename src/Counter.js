import { useReducer } from "react";
//it is an old state/starting state
const initialState={count:0};

//state is immutable

//wrong:-
/*state.count=sate.count+1
return state*/

//correct:-
/*   return{...state,count:state.count+1} 
return satte */

//pure function
//state:-current data  (const initialState={count:0};)
//action:-what you want to do
//default is used when the action.type does'nt match to the any of the cases

function Reducer(state,action){
    switch(action.type){
        case "increment":
          return{...state,count:state.count+1} 
          
          case "decrement":
           return{...state,count:state.count-1}
           
           case "increment5":
             return{...state,count:state.count+5}

              case "reset":
             return initialState;

                default:
                    return state;
    }

    /*if(action.type==="increment"){
        return{...state,count:state.count+1}
    }else if(action.type==="decrement"){
        return{...state,count:state.count-1}
    }
    else if(action.type==="increment5"){
        return{...state,count:state.count+5}
    }*/
}

//it is top level
function Counter(){
     const[state,dispatch]=useReducer(Reducer,initialState);
     //Reducer:-decides the state should changes
//it is hook call
//dispatch means a function to sends the actions to the reducer



    const increment={type:"increment"}
    const decrement={type:"decrement"}
    const increment5={type:"increment5"}
    const reset={type:"reset"}

    function add(){
        dispatch(increment)
    }

     function subtract(){
        dispatch(decrement)

    }
     function add5(){
        dispatch(increment5)
     }

      function start(){
        dispatch(reset)
      }
     

    return(
        <div>
            <h2>Count:{state.count}</h2>
            <button onClick={add}>increment</button>
            <button onClick={subtract}>decrement</button>
            <button onClick={add5}>increment 5</button>
            <button onClick={start}>Reset</button>
        </div>
    )
}
export default Counter;