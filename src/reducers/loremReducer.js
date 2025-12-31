import {
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
  FETCH_LOREM_FAILURE
} from '../actions/loremActions';

const initialState = {
  loading: true, // ensures Cypress sees loading first
  data: [],      // no posts rendered initially
  error: ''
};

const loremReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return {
        ...state,
        loading: true,
        data: [],  // ensure posts hidden while loading
        error: ''
      };
    case FETCH_LOREM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: Array.isArray(action.payload) ? action.payload : [],
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
