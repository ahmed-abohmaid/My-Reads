import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../APIs/BooksAPI";
import Book from "./Book";
import { PropTypes } from "prop-types";

function Search({ changeShelf, books }) {
   const [newBooks, setBooks] = useState([]);
   const [query, setQuery] = useState("");

   // To handle err. when book is not found
   const [isFound, setIsFound] = useState(false);

   const handleSearch = (query) => {
      setQuery(query);

      // Check if there is query => run search, if query is empty => reset state to default
      if (query) {
         BooksAPI.search(query.trim(), 50).then((books) => {
            if (!books.error) {
               setBooks(books);
               setIsFound(false);
            } else {
               setBooks([]);
               setIsFound(true);
            }
         });
      } else {
         setBooks([]);
         setIsFound(false);
      }
   };

   return (
      <div className="search-books">
         <div className="search-books-bar">
            <Link to="/" className="close-search">
               Close
            </Link>
            <div className="search-books-input-wrapper">
               <input
                  type="text"
                  placeholder="Search by title, author, or ISBN"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
               />
            </div>
         </div>

         <div className="search-books-results">
            <ol className="books-grid">
               {newBooks.length > 0 &&
                  newBooks.map((book) => {
                     return (
                        <Book
                           key={book.id}
                           book={book}
                           books={books}
                           changeTheShelf={changeShelf}
                        />
                     );
                  })}
            </ol>
         </div>
         {isFound && (
            <h3>
               Your search doesn't return any books. Try search anothor one.
            </h3>
         )}
      </div>
   );
}

Search.propTypes = {
   books: PropTypes.array.isRequired,
   changeShelf: PropTypes.func.isRequired,
};

export default Search;
