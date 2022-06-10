import React from 'react';

const NewBook = () => (
  <div className="newBook">
    <h1>ADD NEW BOOK</h1>
    <form>
      <input type="text" placeholder="Book title" />
      <select>
        <option>Category</option>
        <option>Category 1</option>
        <option>Category 2</option>
      </select>
      <button type="button" className="addBookBtn">ADD BOOK</button>
    </form>
  </div>
);

export default NewBook;
