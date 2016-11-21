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

		const products = JSON.parse(localStorage.getItem('products'));

		if(products) {
			dispatch(loadProductsRecieved(products));
			return;
		}

		return moltin.Product.List({limit: 1000},function (response) { // eslint-disable-line new-cap
			localStorage.setItem('products', JSON.stringify(response));

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

export const loadProductFetch = (inCache, id, product) => {

	//Write an error dispatch - middleware?
	if(!id) {
		console.log('Error loadProductRecieved: no id,: ', id);
	};

	const errorHandler = (error) => {
		console.error(error);
	}

	return dispatch => {
		//grab it from existing store if possible
		if(inCache && product) {
			return dispatch(loadProductRecieved(product))
		}

		dispatch(loadProductRequest());
		return moltin.Product.Get(id, function (response) { // eslint-disable-line new-cap
			console.log('GOT A RESPONSE FOR PRODUCTS: ', response);
			dispatch(loadProductRecieved(response))
		}, errorHandler);
	}
}

export const resetProduct = () => {
	return {
		type: types.RESET_PRODUCT
	}
}
