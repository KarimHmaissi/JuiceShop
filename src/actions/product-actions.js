import * as types from './action-types';

import moltin from '../Moltin/MoltinFactory';

export const loadProductsRequest = () => {
	return {
		type: types.LOAD_PRODUCTS_REQUEST,
		payload: {}
	}
}

export const loadProductsRecieved = (response) => {
	return {
		type: types.LOAD_PRODUCTS_RECIEVED,
		payload: response
	}
}

export const loadProductsFetch = () => {
	const errorHandler = (error) => {
		console.error(error);
	}

	return dispatch => {
		dispatch(loadProductsRequest());
		return moltin.Product.List({offset: 0}, function (response) {
			console.log('GOT A RESPONSE FOR PRODUCTS: ', response);
			dispatch(loadProductsRecieved(response))
		}, errorHandler);
	}
}





export const loadProductRequest = () => {
	return {
		type: types.LOAD_PRODUCT_REQUEST,
		payload: {}
	}
}

export const loadProductRecieved = (response) => {
	return {
		type: types.LOAD_PRODUCT_RECIEVED,
		payload: response
	}
}

export const loadProductFetch = (id) => {

	//Write an error dispatch - middleware?
	if(!id) {
		console.log('Error loadProductRecieved: no id,: ', id);
	};

	const errorHandler = (error) => {
		console.error(error);
	}

	return dispatch => {
		dispatch(loadProductRequest());
		return moltin.Product.Get(id, function (response) {
			console.log('GOT A RESPONSE FOR PRODUCTS: ', response);
			dispatch(loadProductRecieved(response))
		}, function (response) {
			console.log('GOT A RESPONSE FOR PRODUCTS: ', response);
			// dispatch(loadProductRecieved(response))
			console.error('Moltin sent an error');
		});
	}
}

export const resetProduct = () => {
	return {
		type: types.RESET_PRODUCT
	}
}
