import { combineReducers, createStore } from 'redux';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

export const mergedReducers = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = createStore(mergedReducers);

export default store;
