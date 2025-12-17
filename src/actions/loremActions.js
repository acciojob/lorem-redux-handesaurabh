// Action Types
export const FETCH_LOREM_REQUEST = 'FETCH_LOREM_REQUEST';
export const FETCH_LOREM_SUCCESS = 'FETCH_LOREM_SUCCESS';
export const FETCH_LOREM_FAILURE = 'FETCH_LOREM_FAILURE';

// Action Creators
export const fetchLoremRequest = () => ({
  type: FETCH_LOREM_REQUEST
});

export const fetchLoremSuccess = (data) => ({
  type: FETCH_LOREM_SUCCESS,
  payload: data
});

export const fetchLoremFailure = (error) => ({
  type: FETCH_LOREM_FAILURE,
  payload: error
});

// Async Action Creator (Thunk)
export const fetchLoremData = () => {
  return async (dispatch) => {
    dispatch(fetchLoremRequest());
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      dispatch(fetchLoremSuccess(data));
    } catch (error) {
      dispatch(fetchLoremFailure(error.message));
    }
  };
};
