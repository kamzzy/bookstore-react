const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  { bookId: 1, title: 'title1', author: 'author1' },
  { bookId: 2, title: 'title2', author: 'author2' },
  { bookId: 3, title: 'title3', author: 'author3' },
];

export const addBook = (title, author) => ({
  type: ADD_BOOK,
  bookId: Date.now(),
  title,
  author,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

/// /// Reducers

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_BOOK:
      return [...state, {
        bookId: action.bookId,
        title: action.title,
        author: action.author,
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.bookId !== action.bookId);
  }
};

export default bookReducer;
