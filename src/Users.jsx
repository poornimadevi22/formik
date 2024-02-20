import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './App.css'


 export default function BookForm() {
      const initialValues = {
        title: '',
         author: '',
          isbn: '',
  };

    const [books, setBooks] = useState([]);

     const handleSubmit = (values, { resetForm }) => {
      const newBook = { ...values };
         setBooks([...books, newBook]);
        resetForm();
  };

  return (
    <div>
      <h2>Add Book</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="container">
            <div>
              <label>Title</label>
              <Field type="text" name="title" />
              <ErrorMessage name="title" component="div" className="error" />
            </div>
            <div>
              <label>Author</label>
              <Field type="text" name="author" />
              <ErrorMessage name="author" component="div" className="error" />
            </div>
            <div>
              <label>ISBN</label>
              <Field type="text" name="isbn" />
              <ErrorMessage name="isbn" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            
          </Form>
        )}
      </Formik>
   
 
  <div>
  <h2>Books</h2>
  <ul>
    {books.map((book, index) => (
      <li key={index}>
        <div>
          <strong>Title:</strong> {book.title}
        </div>
        <div>
          <strong>Author:</strong> {book.author}
        </div>
        <div>
          <strong>ISBN:</strong> {book.isbn}
        </div>
      </li>
    ))}
  </ul>
</div>
</div>
)
}

