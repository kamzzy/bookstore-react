import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKs';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FXI1aYxKrbeD9BLTpa92/books';

const initialState = [];

export const fetchBooks = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  dispatch({
    type: FETCH_BOOKS,
    payload: response.data,
  });
};

export const addNewBook = (book) => async (dispatch) => {
  try {
    await axios.post(baseUrl, book);
    return dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  } catch (err) { return err; }
};

export const removeAbook = (book) => async (dispatch) => {
  try {
    await axios(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FXI1aYxKrbeD9BLTpa92/books/${book.item_id}`,
      {
        method: 'delete',
      });
    return dispatch({
      type: REMOVE_BOOK,
      payload: book,
    });
  } catch (err) {
    return err;
  }
};
/// /// Reducers

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state,
        action.payload,
      ];
    case FETCH_BOOKS:
      return Object.keys(action.payload).map((el) => ({ ...action.payload[el][0], item_id: el }));
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload.item_id);
    default:
      return state;
  }
};

export default bookReducer;
