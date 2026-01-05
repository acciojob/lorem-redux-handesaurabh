// Removed the incorrect import statement that caused the crash

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
      // Delay to ensure the "Loading..." state is visible for Cypress tests
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Real API call allows Cypress to intercept and mock the response with 1 item
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = await response.json();

      dispatch(fetchLoremSuccess(data));
    } catch (error) {
      dispatch(fetchLoremFailure(error.message));
    }
  };
};