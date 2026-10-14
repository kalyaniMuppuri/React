function Button(props){
     
    const{text,type,operation}=props;//with object destructuring
    //without object destructuring prop.text,props.type and props.operation 

    return(
        <button className={`btn ${type==='add'?'btn-add':'btn-delete'}`} onClick={()=>operation()}>
        {text}
        </button>
    )
}
export default Button;

//1.text
//2.type-add,delete
//3.operation