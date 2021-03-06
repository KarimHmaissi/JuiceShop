import * as types from './action-types';
import moltin from '../Moltin/MoltinFactory';
import Axios from 'axios';

export const loadCheckoutRequest = () => {
	return {
		type: types.LOAD_CHECKOUT_REQUEST,
		payload: {}
	}
}

export const loadCheckoutRecieved = (response) => {
	return {
		type: types.LOAD_CHECKOUT_RECIEVED,
		payload: response
	}
}


// moltin.Cart.Complete({
//   customer: {
//     first_name: 'Jon',
//     last_name:  'Doe',
//     email:      'support@moltin.com'
//   },
//   shipping: '1059477589212529113',
//   gateway: 'dummy',
//   bill_to: {
//     first_name: 'Jon',
//     last_name:  'Doe',
//     address_1:  '123 Moltin Street',
//     city:       'Mountain View',
//     county:     'California',
//     country:    'US',
//     postcode:   'CA94040',
//     phone:      '6507123124'
//   },
//   ship_to: 'bill_to',
// }, function(order) {
//     console.log(order);
// }, function(error) {

// });

export const loadCheckoutFetch = (customer, billTo, shipTo='bill_to', gateway='dummy') => {

	return dispatch => {

		dispatch(loadCheckoutRequest());

		return moltin.Cart.Complete({
			customer: {
				first_name: customer.first_name,
				last_name: customer.last_name,
				email: customer.email,
			},
			gateway: 'stripe',
			bill_to: {
			    first_name: billTo.first_name,
			    last_name: billTo.last_name,
			    address_1:  billTo.address_1,
			    // city:       billTo.city,
			    county:     billTo.county,
			    country:    'US',
			    postcode:   billTo.postcode,
			},
			ship_to: 'bill_to',
			shipping: 'Royal Mail First Class'
		},
		(response) => {
			console.log('loadCheckoutFetch: ', response);

		}, (error) => {
			console.log('Something is wrong');
			console.error(error);
		})


		// return moltin.Cart.Complete({
		// 	customer,
		// 	gateway,
		// 	bill_to: billTo,
		// 	ship_to: shipTo
		// }, (response) => {
		// 	console.log('loadCheckoutFetch: ', response);

		// }, (error) => {
		// 	console.log('Something is wrong');
		// 	console.error(error);
		// })

	}
}

// export const loadCheckoutFetch = (customerId) => {

// 	const errorHandler = (error) => {
// 		console.error(error);
// 	}

// 	return Axios.post('http://localhost:8080/api/checkout', { customerId })
// 		.then(function (response) {

// 			if(response.data) {
// 				console.log('GOT A RESPONSE FOR CHECKOUT: ', response.data);
// 				dispatch(loadCheckoutRecieved(response.data));
// 			} else {
// 				console.error('Problem getting checkout data');
// 			}

// 		}, function (error) {
// 			console.log(error);
// 		})
// }

export const resetCheckout = () => {
	return {
		type: types.RESET_CHECKOUT
	}
}
