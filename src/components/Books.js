import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewBook from './NewBook';
import { removeAbook, fetchBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const handleDeleteClick = (book) => {
    dispatch(removeAbook(book));
  };

  return (
    <div className="grid">
      {books.map((book) => (
        <div className="row gy-4" key={book.item_id}>
          <div className="displayCol col-12">
            <div className="colRow row">
              <span className="genre">{book.category}</span>
              <div className="col-8">
                <h3 className="title">{book.title}</h3>
                <span className="author">{book.author}</span>
                <button type="button" className="comment">Comments</button>
                <button type="button" className="remove" onClick={() => handleDeleteClick(book)}>Remove</button>
                <button type="button" className="edit">Edit</button>
              </div>
              <div className="col-2">
                <div className="spinner" />
                <span className="percentComplete">64%</span>
                <span className="completed">Completed</span>
              </div>
              <div className="readingPosition col-2">
                <span className="currentChapter">CURRENT CHAPTER</span>
                <span className="chapterIndicator">Chapter 17</span>
                <button type="button" className="progress">UPDATE PROGRESS</button>
              </div>
            </div>

          </div>
        </div>
      ))}

      <NewBook />
    </div>
  );
};

export default Books;
