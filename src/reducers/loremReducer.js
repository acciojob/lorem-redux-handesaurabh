import {
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
  FETCH_LOREM_FAILURE
} from '../actions/loremActions';

const initialState = {
  loading: true,
  data: [],  // ensure empty initially
  error: ''
};

const loremReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return {
        ...state,
        loading: true,
        data: [],  // hide posts while loading
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
