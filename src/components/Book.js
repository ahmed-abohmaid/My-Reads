import ChangeShelf from "./ChangeShelf";
import { PropTypes } from "prop-types";
import noBookCover from "../icons/no-cover.jpg";

function Book({ book, changeTheShelf, books }) {
   // when a book does not have a thumbnail
   const coverImg =
      book.imageLinks && book.imageLinks.thumbnail
         ? book.imageLinks.thumbnail
         : noBookCover;

   return (
      <li>
         <div className="book">
            <div className="book-top">
               <div
                  className="book-cover"
                  style={{
                     width: 128,
                     height: 193,
                     backgroundImage: `url("${coverImg}")`,
                     backgroundSize: `cover`,
                     backgroundRepeat: `no-repeat`,
                  }}
               ></div>
               <ChangeShelf
                  book={book}
                  changeTheShelf={changeTheShelf}
                  books={books}
               />
            </div>
            <div className="book-title">
               {book.title ? book.title : "Title Not available"}
            </div>
            {
               // Check if there are authors
               book.authors &&
                  book.authors.map((author) => {
                     return (
                        <div className="book-authors" key={author}>
                           {author}
                        </div>
                     );
                  })
            }
         </div>
      </li>
   );
}

Book.propTypes = {
   book: PropTypes.object.isRequired,
   books: PropTypes.array.isRequired,
   changeTheShelf: PropTypes.func.isRequired,
};

export default Book;
