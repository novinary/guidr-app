// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    uploadDate: undefined,
  };
  
  export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
        return {
          ...state,
          text: action.text
        };
      case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: 'date'
        };
      case 'SET_UPLOAD_DATE':
        return {
          ...state,
          uploadDate: action.uploadDate
        };
      default:
        return state;
    }
  };
  