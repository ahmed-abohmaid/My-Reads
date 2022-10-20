import "../css/App.css";
import Home from "./Home";
import Search from "./Search";
import { useEffect, useState } from "react";
import * as BooksAPI from "../APIs/BooksAPI";
import { Routes, Route } from "react-router-dom";

function App() {
   /*
      Start Hooks
   */
   const [books, setBooks] = useState([]);

   // Get books from API
   useEffect(() => {
      getBooks();
   }, []);

   // console.log(books);

   /*
      Start Methods
   */
   // To Change shelf of a target book
   const changeShelf = (updatedBook, shelf) => {
      BooksAPI.update(updatedBook, shelf).then((res) => {
         updatedBook.shelf = shelf;

         // Remove uptaded book from old books array
         setBooks([
            ...books
               .filter((book) => book.id !== updatedBook.id)
               .concat(updatedBook),
         ]);
      });
   };

   // To get books from API
   const getBooks = () => {
      BooksAPI.getAll().then((books) => setBooks(books));
   };

   return (
      <div className="app">
         <Routes>
            <Route
               path="/"
               element={<Home books={books} changeShelf={changeShelf} />}
            />
            <Route
               path="/search"
               element={<Search changeShelf={changeShelf} books={books} />}
            />
         </Routes>
      </div>
   );
}

export default App;
