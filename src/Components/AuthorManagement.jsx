// src/components/AuthorManagement.js

import { useState } from 'react';
import AuthorForm from '../Pages/AuthorForm';
import AuthorList from '../Pages/AuthorList';



const AuthorManagement = () => {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const addAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  const updateAuthor = (updatedAuthor) => {
    setAuthors(authors.map(author => (author.name === updatedAuthor.name ? updatedAuthor : author)));
  };

  const deleteAuthor = (name) => {
    setAuthors(authors.filter(author => author.name !== name));
  };

  const editAuthor = (author) => {
    setSelectedAuthor(author);
  };

  const clearAuthor = () => {
    setSelectedAuthor(null);
  };

  return (
    <div>
      <AuthorForm author={selectedAuthor} addAuthor={addAuthor} updateAuthor={updateAuthor} clearAuthor={clearAuthor} />
      <AuthorList authors={authors} deleteAuthor={deleteAuthor} editAuthor={editAuthor} />
    </div>
  );
};

export default AuthorManagement;