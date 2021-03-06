import * as types from './action-types';
import * as uiActions from './ui-actions';
import moltin from '../Moltin/MoltinFactory';


export const getCartRequest = () => {
	return {
		type: types.GET_CART_REQUEST
	}
}

export const getCartRecieved = (response) => {
	return {
		type: types.GET_CART_RECIEVED,
		payload: response
	}
}


export const addProductRequest = () => {
	return {
		type: types.ADD_PRODUCT_REQUEST
	}
}

export const addProductRecieved = (response) => {
	return {
		type: types.ADD_PRODUCT_RECIEVED,
		payload: response
	}
}


export const removeProductRequest = () => {
	return {
		type: types.REMOVE_PRODUCT_REQUEST
	}
}

export const removeProductRecieved = (response) => {
	return {
		type: types.REMOVE_PRODUCT_RECIEVED,
		payload: response
	}
}


export const getCartFetch = () => {

	//Write an error dispatch - middleware?

	return dispatch => {
		dispatch(addProductRequest());
		return moltin.Cart.Contents(function (response) { // eslint-disable-line new-cap
			console.log('GOT A RESPONSE FOR CART: ', response);
			dispatch(getCartRecieved(response))
		}, function (response) {
			console.log('GOT A RESPONSE FOR CART: ', response);
			console.error('Moltin sent an error');
		});
	}
}


export const addProductFetch = (productId) => {

	//Write an error dispatch - middleware?
	if(!productId) {
		console.log('Error addProductFetch: no id,: ', productId);
	};

	return dispatch => {
		dispatch(uiActions.openSidebar());
		dispatch(addProductRequest());
		return moltin.Cart.Insert(productId, 1, null, function (response) { // eslint-disable-line new-cap
			console.log('GOT A RESPONSE FOR CART: ', response);
			dispatch(addProductRecieved(response));
			dispatch(getCartFetch());
		}, function (response) {
			console.log('GOT A RESPONSE FOR CART: ', response);
			console.error('Moltin sent an error');
		});
	}
}


export const removeProductFetch = (productId) => {

	//Write an error dispatch - middleware?
	if(!productId) {
		console.log('Error removeProductFetch: no id,: ', productId);
	};

	return dispatch => {
		dispatch(removeProductRequest());
		return moltin.Cart.Remove(productId, function (response) { // eslint-disable-line new-cap
			console.log('GOT A RESPONSE FOR REMOVE FROM CART: ', response);
			dispatch(removeProductRecieved(response));
			dispatch(getCartFetch());
		}, function (response) {
			console.log('GOT A RESPONSE FOR REMOVE FROM CART: ', response);
			console.error('Moltin sent an error');
		});
	}
}


