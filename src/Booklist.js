import Book from './Book';
function Booklist(props){
   let books=props.books;
     return(
        <div className="book-list">
            {books.map((book)=>(
                <Book 
                title={book.title}
                 author={book.author}
                  year={book.year}
                  image={book.image}
                  />
            ))}
        </div>
    )
}
export default Booklist;