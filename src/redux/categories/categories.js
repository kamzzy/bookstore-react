const CHECK_STATUS = 'CHECK_STATUS';

const initialState = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case CHECK_STATUS:
      return 'Under construction';
  }
};

export default categoriesReducer;
