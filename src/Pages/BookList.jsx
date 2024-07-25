import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const BookList = ({ books, deleteBook, editBook }) => {
  return (
    <div>
      <h2 style={{ color: "#006064" }}>Book List</h2>
      <div>
        {books.map((book) => (
          <div key={book.isbn} className="list-container d-flex flex-wrap gap-2 justify-content-between align-items-center">
            <div className="d-flex justify-content-between gap-3 flex-wrap align-items-center">
              <span>Book Title: {book.title},</span>
              <span>Author: {book.author},</span>
              <span>ISBN No: {book.isbn},</span>
              <span>Publication Date: {book.publicationDate}</span>
            </div>
            <div className="d-flex gap-2">
              <Button variant="primary" onClick={() => editBook(book)}>Edit</Button>
              <Button variant="danger" onClick={() => deleteBook(book.isbn)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;

BookList.propTypes = {
  books: PropTypes.array,
  deleteBook: PropTypes.func,
  editBook: PropTypes.func,
}
