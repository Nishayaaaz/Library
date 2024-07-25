import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const AuthorList = ({ authors, deleteAuthor, editAuthor }) => {
  return (
    <div>
      <h2 style={{ color: "#006064" }}>Author List</h2>
      <div className="container">
        {authors.map((author) => (
          <div key={author.name} className="list-container d-flex flex-wrap gap-2 justify-content-between align-items-center">
            <div className="d-flex justify-content-between gap-3 flex-wrap align-items-center">
              <span>Author Name: {author.name},</span>
              <span>D.O.B: {author.birthDate},</span>
              <span>Biography: {author.biography}</span>
            </div>
            <div className="d-flex gap-2">
              <Button variant="primary" onClick={() => editAuthor(author)}>Edit</Button>
              <Button variant="danger" onClick={() => deleteAuthor(author.name)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorList;

AuthorList.propTypes = {
  authors: PropTypes.array,
  deleteAuthor: PropTypes.func,
  editAuthor: PropTypes.func,
}