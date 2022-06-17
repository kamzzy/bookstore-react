import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const composeEnhancers = compose;

export default configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
},
composeEnhancers(applyMiddleware(thunk)));
