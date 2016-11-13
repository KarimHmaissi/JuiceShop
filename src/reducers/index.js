
import {combineReducers} from 'redux';
import * as types from '../actions/action-types';

const moltin = (state = {}, action) => {
  return state;
};

const products = (state = {}, action) => {
	switch (action.type) {
	  case types.LOAD_PRODUCTS_REQUEST:
	    return state
	  case types.LOAD_PRODUCTS_RECIEVED: 
	  	return Object.assign({}, state, {products: action.payload});
	  default:
	    return state;
	}
}

const product = (state = {}, action) => {
	switch (action.type) {
	  case types.LOAD_PRODUCT_REQUEST:
	    return state
	  case types.LOAD_PRODUCT_RECIEVED: 
	  	return Object.assign({}, state, {product: action.payload});
	  case types.RESET_PRODUCT:
	  	return Object.assign({}, state, {product: null});
	  default:
	    return state;
	}
}


const rootReducer = combineReducers({
	moltin,
	products,
	product
});

export default rootReducer;
