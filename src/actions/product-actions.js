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
		return moltin.Product.Find(errorHandler, function (response) {
			console.log('GOT A RESPONSE FOR PRODUCTS: ', response);
			dispatch(loadProductsRecieved(response))
		});
	}
}
