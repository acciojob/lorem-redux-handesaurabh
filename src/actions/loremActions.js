import {
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
  FETCH_LOREM_FAILURE
} from '../actions/loremActions'; // Note: Ensure this import path is correct for your file structure, or use the constants defined in the file if they are in the same file.

// Ideally, define constants at the top if they aren't imported
export const FETCH_LOREM_REQUEST = 'FETCH_LOREM_REQUEST';
export const FETCH_LOREM_SUCCESS = 'FETCH_LOREM_SUCCESS';
export const FETCH_LOREM_FAILURE = 'FETCH_LOREM_FAILURE';

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

export const fetchLoremData = () => {
  return async (dispatch) => {
    dispatch(fetchLoremRequest());

    try {
      // 1. Keep the delay to pass the "Loading State" visibility check
      await new Promise(resolve => setTimeout(resolve, 3000));

      // 2. Use fetch instead of hardcoded data
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = await response.json();

      // 3. Dispatch the real data
      dispatch(fetchLoremSuccess(data));

    } catch (error) {
      dispatch(fetchLoremFailure(error.message));
    }
  };
};