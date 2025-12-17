// Action Types
export const FETCH_LOREM_REQUEST = 'FETCH_LOREM_REQUEST';
export const FETCH_LOREM_SUCCESS = 'FETCH_LOREM_SUCCESS';
export const FETCH_LOREM_FAILURE = 'FETCH_LOREM_FAILURE';

// Action Creators
export const fetchLoremRequest = () => {
  console.log('fetchLoremRequest action creator called');
  return {
    type: FETCH_LOREM_REQUEST
  };
};

export const fetchLoremSuccess = (data) => {
  console.log('fetchLoremSuccess action creator called with data:', data);
  return {
    type: FETCH_LOREM_SUCCESS,
    payload: data
  };
};

export const fetchLoremFailure = (error) => {
  console.log('fetchLoremFailure action creator called with error:', error);
  return {
    type: FETCH_LOREM_FAILURE,
    payload: error
  };
};

// Async Action Creator (Thunk)
export const fetchLoremData = () => {
  return async (dispatch) => {
    console.log('fetchLoremData action called');
    dispatch(fetchLoremRequest());
    try {
      console.log('Attempting to fetch from API');
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      console.log('API response:', response);
      if (!response.ok) {
        // If API is not available, use mock data
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const apiData = await response.json();
      console.log('API data received:', apiData);
      // Ensure data has the correct structure
      const formattedData = apiData.map(post => ({
        title: post.title || 'Lorem Ipsum Dolor Sit Amet',
        body: post.body || 'Lorem ipsum dolor sit amet...'
      }));
      dispatch(fetchLoremSuccess(formattedData));
    } catch (error) {
      // Fallback to mock data if API fails
      console.warn('API not available, using mock data:', error.message);
      const mockData = {
        title: 'Lorem Ipsum Dolor Sit Amet',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      };
      console.log('Using mock data:', mockData);
      // Dispatch mock data immediately
      console.log('Dispatching mock data');
      dispatch(fetchLoremSuccess(mockData));
    }
  };
};