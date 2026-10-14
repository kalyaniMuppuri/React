function Book(props){
    return(
        <div className="book">
             <img src={props.image} alt={props.title}/>
            <h5>{props.title}</h5>
            <p>Author:{props.author}</p>
            <p>Year:{props.year}</p>
        </div>
    )
}
export default Book;