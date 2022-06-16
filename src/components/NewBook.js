import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const NewBook = () => {
  const [titleValue, setTitleValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (titleValue && authorValue) {
      dispatch(
        addBook({
          title: titleValue,
          author: authorValue,
        }),
      );
    }
  };
  return (
    <div className="newBook">
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Book title"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <select name="authors">
          <option
            value={authorValue}
            onChange={(e) => setAuthorValue(e.target.value)}
          >
            Author1

          </option>
          <option
            value={authorValue}
            onChange={(e) => setAuthorValue(e.target.value)}
          >
            Author2

          </option>
          <option
            value={authorValue}
            onChange={(e) => setAuthorValue(e.target.value)}
          >
            Author3

          </option>
        </select>
        <button type="button" className="addBookBtn">ADD BOOK</button>
      </form>
    </div>
  );
};

export default NewBook;
