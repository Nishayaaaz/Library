import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

const BookForm = ({ book, addBook, updateBook, clearBook }) => {
  const initialValues = {
    title: book?.title || "",
    author: book?.author || "",
    isbn: book?.isbn || "",
    publicationDate: book?.publicationDate || "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    isbn: Yup.string().required("ISBN is required"),
    publicationDate: Yup.date().required("Publication Date is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (book) {
      updateBook(values);
    } else {
      addBook(values);
    }
    clearBook();
    resetForm();
  };

  return (
    <div className="form-container">
      <h2>Book Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field id="title" name="title" type="text" />
              <ErrorMessage name="title" component="div" />
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <Field id="author" name="author" type="text" />
              <ErrorMessage name="author" component="div" />
            </div>
            <div>
              <label htmlFor="isbn">ISBN</label>
              <Field id="isbn" name="isbn" type="text" />
              <ErrorMessage name="isbn" component="div" />
            </div>
            <div>
              <label htmlFor="publicationDate">Publication Date</label>
              <Field id="publicationDate" name="publicationDate" type="date" />
              <ErrorMessage name="publicationDate" component="div" />
            </div>
            <button type="submit">{book ? "Update" : "Add"} Book</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;

BookForm.propTypes = {
  book: PropTypes.object,
  addBook: PropTypes.func,
  updateBook: PropTypes.func,
  clearBook: PropTypes.func,
}
 