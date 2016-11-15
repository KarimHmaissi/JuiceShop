
import {combineReducers} from 'redux';
import * as types from '../actions/action-types';
import { reducer as formReducer } from 'redux-form'

const moltin = (state = {}, action) => {
  return state;
};

const products = (state = {}, action) => {
	switch (action.type) {
	  case types.LOAD_PRODUCTS_REQUEST:
	    return state;
	  case types.LOAD_PRODUCTS_RECIEVED: 
	  	return Object.assign({}, state, {products: action.payload});
	  default:
	    return state;
	}
}

const product = (state = {}, action) => {
	switch (action.type) {
	  case types.LOAD_PRODUCT_REQUEST:
	    return state;
	  case types.LOAD_PRODUCT_RECIEVED: 
	  	return Object.assign({}, state, {product: action.payload});
	  case types.RESET_PRODUCT:
	  	return Object.assign({}, state, {product: null});
	  default:
	    return state;
	}
}

const user = (state = {}, action) => {
	switch (action.type) {
		case types.LOGIN_USER_REQUEST:
			return state;
		case types.LOGIN_USER_RECIEVED:
			console.log('USER REDUCER Erecieved user');
			return Object.assign({}, state, {user: action.payload});
		case types.LOGOUT:
			return Object.assign({}, state, {user: null});
		default:
			return state;
	}
}


const rootReducer = combineReducers({
	moltin,
	products,
	product,
	user,
	form: formReducer,
});

export default rootReducer;
