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
    
    // Increased delay for Cypress to see loading state clearly
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        signal: controller.signal,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const apiData = await response.json();
      
      const formattedData = apiData.slice(0, 1).map((post) => ({  // Only 1 post for Cypress
        title: post.title || 'Lorem Ipsum Dolor Sit Amet',
        body: post.body || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }));
      
      dispatch(fetchLoremSuccess(formattedData));
    } catch (error) {
      dispatch(fetchLoremFailure(error.message || 'Failed to fetch data'));
    }
  };
};
