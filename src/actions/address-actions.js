import * as types from './action-types';
import { routerActions } from 'react-router-redux';
import Axios from 'axios';

export const loadAddressesRequest = () => {
	return {
		type: types.LOAD_ADDRESSES_REQUEST,
		payload: {}
	}
}

export const loadAddressesRecieved = (response) => {
	return {
		type: types.LOAD_ADDRESSES_RECIEVED,
		payload: response
	}
}

export const loadAddressesFetch = (customerId) => {

	//Write an error dispatch - middleware?
	console.log('loadAddressesFetch');

	return dispatch => {

		dispatch(loadAddressesRequest());

		if(!customerId) return;

		return Axios.post('http://localhost:8080/api/getAddress', { customerId })
			.then(function (response) {

				if(response.data) {
					console.log('getAddressFetch: ', response.data);
					dispatch(loadAddressesRecieved(response.data.address));
				} else {
					console.error('Problem getting addresses');
				}

			}, function (error) {
				console.log(error);
			})
	}
}



export const addAddressRequest = () => {
	return {
		type: types.ADD_ADDRESS_REQUEST,
		payload: {}
	}
}

export const addAddressRecieved = (response) => {
	return {
		type: types.ADD_ADDRESS_RECIEVED,
		payload: response
	}
}

export const addAddressFetch = (customerId, email, password, firstName, surname, address1, address2, county, country, postcode) => {

	//Write an error dispatch - middleware?

	return dispatch => {

		dispatch(addAddressRequest());

		if(!email || !password) return;

		return Axios.post('http://localhost:8080/api/addAddress', { 
			customerId,
			email, 
			password, 
			firstName,
			surname,
			address1,
			address2,
			county,
			country,
			postcode,
		 })
		.then(function (response) {

			if(response.data) {
				dispatch(loadAddressesRecieved(response.data.address));
			} else {
				console.error('Problem logging in');
			}

		}, function (error) {
			console.log(error);
		})
	}
}


export const selectAddress = (address) => {
	return {
		type: types.SELECT_ADDRESS,
		payload: address
	}
}


