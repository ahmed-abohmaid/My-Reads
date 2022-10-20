import { PropTypes } from "prop-types";

function ChangeShelf({ book, changeTheShelf, books }) {
   const updateShelf = (e) => {
      changeTheShelf(book, e.target.value);
   };

   // Set default value "none" to current shelf to handle search bage
   let currShelf = "none";

   // Set current shelf for each book
   for (let currBook of books) {
      if (currBook.id === book.id) {
         currShelf = currBook.shelf;
         break;
      }
   }

   return (
      <div className="book-shelf-changer">
         <select onChange={updateShelf} defaultValue={currShelf}>
            <option value="none" disabled>
               Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
         </select>
      </div>
   );
}

ChangeShelf.propTypes = {
   book: PropTypes.object.isRequired,
   books: PropTypes.array.isRequired,
   changeTheShelf: PropTypes.func.isRequired,
};

export default ChangeShelf;
