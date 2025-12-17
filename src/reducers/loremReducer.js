import { FETCH_LOREM_REQUEST, FETCH_LOREM_SUCCESS, FETCH_LOREM_FAILURE } from '../actions/loremActions.js';

const initialState = {
  loading: true,
  data: { title: '', body: '' },
  error: ''
};

const loremReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case FETCH_LOREM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      };
    case FETCH_LOREM_FAILURE:
      return {
        ...state,
        loading: false,
        data: { title: '', body: '' },
        error: action.payload
      };
    default:
      return state;
  }
};

export default loremReducer;
