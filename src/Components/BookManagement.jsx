// src/components/BookManagement.js

import { useState } from "react";
import BookForm from "../Pages/BookForm";
import BookList from "../Pages/BookList";


const BookManagement = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const updateBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.isbn === updatedBook.isbn ? updatedBook : book))
    );
  };

  const deleteBook = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  const editBook = (book) => {
    setSelectedBook(book);
  };

  const clearBook = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <BookForm book={selectedBook} addBook={addBook} updateBook={updateBook} clearBook={clearBook} />
      <BookList books={books} deleteBook={deleteBook} editBook={editBook} />
    </div>
  );
};

export default BookManagement;