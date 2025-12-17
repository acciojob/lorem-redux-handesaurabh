import { FETCH_LOREM_REQUEST, FETCH_LOREM_SUCCESS, FETCH_LOREM_FAILURE } from '../actions/loremActions';

const initialState = {
  loading: false,
  data: { title: '', body: '' },
  error: ''
};

const loremReducer = (state = initialState, action) => {
  console.log('Reducer called with:', { state, action });
  
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      console.log('Handling FETCH_LOREM_REQUEST');
      return {
        ...state,
        loading: true,
        error: ''
      };
    case FETCH_LOREM_SUCCESS:
      console.log('Handling FETCH_LOREM_SUCCESS with payload:', action.payload);
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      };
    case FETCH_LOREM_FAILURE:
      console.log('Handling FETCH_LOREM_FAILURE with payload:', action.payload);
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
