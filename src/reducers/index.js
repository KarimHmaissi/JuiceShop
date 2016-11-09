
import {combineReducers} from 'redux';
import * as types from '../actions/action-types';

const moltin = (state = {}, action) => {
  console.log('New action: ', action);
  return state;
};

const products = (state = {}, action) => {
	console.log('IN PRODUCT REDUCER');
	switch (action.type) {
	  case types.LOAD_PRODUCTS_REQUEST:
	  	console.log('Recieved LOAD PRODUCT ACTION');
	    return state
	  case types.LOAD_PRODUCTS_RECIEVED: 
	  	console.log(state);
	  	console.log('Recieved LOAD PRODUCT RECIEVED ACTION');
	  	return Object.assign({}, state, {products: action.payload});
	  default:
	    return state;
	}
}

const rootReducer = combineReducers({
	moltin,
	products
});

export default rootReducer;
