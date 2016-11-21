
import {combineReducers} from 'redux';
import * as types from '../actions/action-types';
import { reducer as formReducer } from 'redux-form';

import { routerReducer } from 'react-router-redux';

import initialState from '../store/InitialState';

const moltin = (state = {}, action) => {
  return state;
};

const products = (state = [], action) => {
	switch (action.type) {
	  case types.LOAD_PRODUCTS_REQUEST:
	    return state;
	  case types.LOAD_PRODUCTS_RECIEVED: 
	  	return action.payload;
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

const user = (state = initialState.user, action) => {
	switch (action.type) {
		case types.LOGIN_USER_REQUEST:
			return state;
		case types.LOGIN_USER_RECIEVED:
			return Object.assign({}, state, action.payload);
		case types.LOGOUT:
			return initialState.user;
		default:
			return state;
	}
}


const cart = (state = [], action) => {
	switch (action.type) {

		case types.GET_CART_REQUEST:
			return state;

		case types.GET_CART_RECIEVED:
			return action.payload;

		default:
			return state;
	}
}


const reviews = (state = initialState.reviews, action) => {
	switch (action.type) {
	  case types.LOAD_REVIEWS_REQUEST:
	    return state;
	  case types.LOAD_REVIEWS_RECIEVED:
	  	return action.payload;
	  default:
	    return state;
	}
}



const ui = (state = initialState.ui, action) => {
	switch (action.type) {

		case types.OPEN_SIDEBAR:
			return Object.assign({}, state, {sidebarOpen: true});

		case types.CLOSE_SIDEBAR:
			return Object.assign({}, state, {sidebarOpen: false});

		default:
			return state;
	}
}


const rootReducer = combineReducers({
	routing: routerReducer,
	moltin,
	products,
	product,
	user,
	cart,
	ui,
	reviews,
	form: formReducer,
});

export default rootReducer;
