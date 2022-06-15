const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];

export const addbook = (title, author) => ({
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
