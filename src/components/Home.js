import { Link } from "react-router-dom";
import BookList from "./BookList";
import PropTypes from "prop-types";

function Home({ books, changeShelf }) {
   return (
      <div className="list-books">
         <div className="list-books-title">
            <h1>MyReads</h1>
         </div>
         <BookList books={books} changeShelf={changeShelf} />
         <div className="open-search">
            <Link to="/search">Add a book</Link>
         </div>
      </div>
   );
}

Home.propTypes = {
   books: PropTypes.array.isRequired,
   changeShelf: PropTypes.func.isRequired,
};

export default Home;
