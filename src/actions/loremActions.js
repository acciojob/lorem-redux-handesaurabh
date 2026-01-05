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
      await new Promise(resolve => setTimeout(resolve, 2000));

      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const jsonData = await response.json();

      dispatch(fetchLoremSuccess(jsonData));

    } catch (error) {
      dispatch(fetchLoremFailure(error.message));
    }
  };
};