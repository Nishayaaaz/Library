// src/components/AuthorForm.js

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const AuthorForm = ({ author, addAuthor, updateAuthor, clearAuthor }) => {
  const initialValues = {
    name: author?.name || '',
    birthDate: author?.birthDate || '',
    biography: author?.biography || ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth Date is required'),
    biography: Yup.string().required('Biography is required')
  });

  const handleSubmit = (values, { resetForm }) => {
    if (author) {
      updateAuthor(values);
    } else {
      addAuthor(values);
    }
    clearAuthor();
    resetForm();
  };

  return (
    <div className='form-container'>
      <h2>Author Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" type="text" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="birthDate">Birth Date</label>
              <Field id="birthDate" name="birthDate" type="date" />
              <ErrorMessage name="birthDate" component="div" />
            </div>
            <div>
              <label htmlFor="biography">Biography</label>
              <Field id="biography" name="biography" as="textarea" />
              <ErrorMessage name="biography" component="div" />
            </div>
            <Button variant="primary" type="submit">{author ? 'Update' : 'Add'} Author</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthorForm;

AuthorForm.propTypes = {
  author: PropTypes.object,
  addAuthor: PropTypes.func,
  updateAuthor: PropTypes.func,
  clearAuthor: PropTypes.func,
}
