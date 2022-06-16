import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  { bookId: uuidv4(), title: 'title1', author: 'author1' },
  { bookId: uuidv4(), title: 'title2', author: 'author2' },
  { bookId: uuidv4(), title: 'title3', author: 'author3' },
  { bookId: uuidv4(), title: 'title4', author: 'author4' },
];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

/// /// Reducers

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.bookId !== action.payload.bookId);
    default:
      return state;
  }
};

export default bookReducer;
