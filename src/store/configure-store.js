import rootReducer from '../reducers';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';


import { composeWithDevTools } from 'redux-devtools-extension';

const routingMiddleware = routerMiddleware(browserHistory)

export default (initialState) => {
  return createStore(
  	rootReducer, 
  	initialState,
  	composeWithDevTools(
	  	applyMiddleware(
	      thunkMiddleware,
	      routingMiddleware,
	  	)
	 ),
  );
};


