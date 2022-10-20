import Book from "./Book";
import { PropTypes } from "prop-types";

function BookShelf({ books, changeShelf }) {
   return (
      <ol className="books-grid">
         {books.map((book) => {
            return (
               <Book
                  book={book}
                  key={book.id}
                  changeTheShelf={changeShelf}
                  books={books}
               />
            );
         })}
      </ol>
   );
}

BookShelf.propTypes = {
   books: PropTypes.array.isRequired,
   changeShelf: PropTypes.func.isRequired,
};

export default BookShelf;
