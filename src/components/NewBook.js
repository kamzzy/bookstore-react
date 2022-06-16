import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const NewBook = () => {
  const [value, setValue] = useState({
    title: '',
    author: '',
  });
  const { title, author } = value;
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (value) {
      const newBook = {
        bookId: uuidv4(),
        title,
        author,
      };
      dispatch(
        addBook(newBook),
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
          name="title"
          onChange={onChangeHandler}
        />
        <select
          name="author"
          onChange={onChangeHandler}
        >
          <option name="author1">Author1</option>
          <option name="author2">Author2</option>
          <option name="author2"> Author3</option>
        </select>
        <button type="submit" className="addBookBtn">ADD BOOK</button>
      </form>
    </div>
  );
};

export default NewBook;
