import React from 'react';
import { CgSpinner } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import NewBook from './NewBook';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="grid">
      {books.map((book) => (
        <div className="row gy-4" key={book.bookId}>
          <div className="displayCol col-12">
            <div className="colRow row">
              <span className="genre">Action</span>
              <div className="col-8">
                <h3 className="title">{book.title}</h3>
                <span className="author">{book.author}</span>
                <button type="button" className="comment">Comments</button>
                <button type="button" className="remove">Remove</button>
                <button type="button" className="edit">Edit</button>
              </div>
              <div className="col-2">
                <CgSpinner className="spinner" />
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
          {/* <div className="displayCol col-12">
            <div className="colRow row">
              <span className="genre">Science Fiction</span>
              <div className="col-8">
                <h3 className="title">Dune</h3>
                <span className="author">Frank Herbert</span>
                <button type="button" className="comment">Comments</button>
                <button type="button" className="remove">Remove</button>
                <button type="button" className="edit">Edit</button>
              </div>
              <div className="col-2">
                <CgSpinner className="spinner" />
                <span className="percentComplete">8%</span>
                <span className="completed">Completed</span>
              </div>
              <div className="readingPosition col-2">
                <span className="currentChapter">CURRENT CHAPTER</span>
                <span className="chapterIndicator">Chapter 3: A Lesson Learned</span>
                <button type="button" className="progress">UPDATE PROGRESS</button>
              </div>
            </div>

          </div>
          <div className="displayCol col-12">
            <div className="colRow row">
              <span className="genre">Economy</span>
              <div className="col-8">
                <h3 className="title">Capital in the Twenty-First Century</h3>
                <span className="author">Suzanne Collins</span>
                <button type="button" className="comment">Comments</button>
                <button type="button" className="remove">Remove</button>
                <button type="button" className="edit">Edit</button>
              </div>
              <div className="col-2">
                <CgSpinner className="spinner" />
                <span className="percentComplete">0%</span>
                <span className="completed">Completed</span>
              </div>
              <div className="readingPosition col-2">
                <span className="currentChapter">CURRENT CHAPTER</span>
                <span className="chapterIndicator">Introduction</span>
                <button type="button" className="progress">UPDATE PROGRESS</button>
              </div>
            </div>

          </div> */}
        </div>
      ))}

      <NewBook />
    </div>
  );
};

export default Books;
