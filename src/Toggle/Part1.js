import useToggle from "./useToggle";

function Part1(){
    const{on,toggle}=useToggle(
        ////
    );

    return(
        <div>
            <h2>part 1</h2>
            <h2>status:{on?"ON":"OFF"}</h2>

            <button onClick={toggle}>
                {on?"OFF":"ON"}
            </button>
        </div>
    )
}export default Part1;