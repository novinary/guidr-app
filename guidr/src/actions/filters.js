// ACTION CREATORS/FILTERS

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  });
  
  // SORT_BY_DATE
  export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
  });
  
// SET_UPLOAD_DATE
export const setUploadDate = (uploadDate) => ({
    type: 'SET_UPLOAD_DATE',
    uploadDate
  });
  