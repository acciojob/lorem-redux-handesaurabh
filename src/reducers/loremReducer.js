import {
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
  FETCH_LOREM_FAILURE
} from '../actions/loremActions';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

const loremReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return {
        loading: true,
        data: [],
        error: ''
      };
    case FETCH_LOREM_SUCCESS:
      return {
        loading: false,
        data: Array.isArray(action.payload) ? action.payload : [],
        error: ''
      };
    case FETCH_LOREM_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload || 'Failed to fetch data'
      };
    default:
      return state;
  }
};

export default loremReducer;