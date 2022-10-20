import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

function BookList({ books, changeShelf }) {
   // To filter books to sutable for their shelf
   const shelfTypes = [
      { type: "currentlyReading", shelfName: "Currently Reading" },
      { type: "wantToRead", shelfName: "Want To Read" },
      { type: "read", shelfName: "Read" },
   ];

   return (
      <div className="list-books-content">
         <div>
            {shelfTypes.map((shelf, index) => {
               const shelfBooks = books.filter(
                  (book) => book.shelf === shelf.type
               );

               return (
                  <div className="bookshelf" key={index}>
                     <h2 className="bookshelf-title">{shelf.shelfName}</h2>
                     <div className="bookshelf-books">
                        <BookShelf
                           books={shelfBooks}
                           changeShelf={changeShelf}
                        />
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
}

BookList.propTypes = {
   books: PropTypes.array.isRequired,
   changeShelf: PropTypes.func.isRequired,
};

export default BookList;
