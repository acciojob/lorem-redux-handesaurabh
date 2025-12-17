import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loremReducer from '../reducers/loremReducer.js';

const rootReducer = combineReducers({
  lorem: loremReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

console.log('Redux store created:', store);

export default store;
