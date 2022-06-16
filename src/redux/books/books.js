import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: [
    { bookId: 1, title: 'title1', author: 'author1' },
    { bookId: 2, title: 'title2', author: 'author2' },
    { bookId: 3, title: 'title3', author: 'author30' },
  ],
  reducers: {
    addBook: (state, action) => {
      const book = {
        bookId: new Date(),
        title: action.payload.title,
        author: action.payload.action,
      };
      state.push(book);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
