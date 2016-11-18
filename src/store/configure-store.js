import rootReducer from '../reducers';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux'

const routingMiddleware = routerMiddleware(browserHistory)

export default (initialState) => {
  return createStore(
  	rootReducer, 
  	initialState,
  	applyMiddleware(
      thunkMiddleware,
      routingMiddleware,
    ),
  );
};


