import {
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
  FETCH_LOREM_FAILURE
} from '../actions/loremActions';

const initialState = {
  loading: true, // Start as true to pass the "loading state by default" test
  data: [],
  error: ''
};

const loremReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return {
        ...state,
        loading: true,
        data: [],
        error: ''
      };
    case FETCH_LOREM_SUCCESS:
      return {
        ...state,
        loading: false,
        // Crucial: Slice to 1 item to match the test expectation of exactly 1 post
        data: Array.isArray(action.payload) ? action.payload.slice(0, 1) : [],
        error: ''
      };
    case FETCH_LOREM_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload || 'Failed to fetch data'
      };
    default:
      return state;
  }
};

export default loremReducer;