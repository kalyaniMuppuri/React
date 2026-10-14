import useCounter from "./useCounter";

function Component2(){
    const{count,Increment,Decrement}=useCounter(
        ///////
    );


    return(
        <div className="counter-box">
            <h2>Component 2</h2>

            <h3>Count:{count}</h3>

            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
        </div>
    )
}
export default Component2;