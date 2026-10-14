import useToggle from "./useToggle";

function Part2(){
    const{on,toggle}=useToggle(
        //////
    );

    return(
        <div>
            <h2>part 2</h2>
             <h2>status:{on?"ON":"OFF"}</h2>

             
            <button onClick={toggle}>
                {on?"OFF":"ON"}
            </button>
        </div>
    )
}export default Part2;