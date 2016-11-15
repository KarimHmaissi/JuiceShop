import * as types from './action-types';
import Axios from 'axios';
import moltin from '../Moltin/MoltinFactory';
import { browserHistory } from 'react-router'

export const loginUserRequest = () => {
	return {
		type: types.LOGIN_USER_REQUEST,
		payload: {}
	}
}

export const loginUserRecieved = (response) => {
	return {
		type: types.LOGIN_USER_RECIEVED,
		payload: response
	}
}

export const loginUserFetch = (email, password) => {

	//Write an error dispatch - middleware?

	const errorHandler = (error) => {
		console.error(error);
	}

	return dispatch => {
		dispatch(loginUserRequest());

		const user = JSON.parse(localStorage.getItem('user'));
		console.log('GOT USER SON');
		console.log(user);


		if(user) {
			dispatch(loginUserRecieved(user));
			return;
		}

		if(!email || !password) return;

		return Axios.post('http://localhost:8080/api/login', { email, password })
			.then(function (response) {
				console.log('RESPONSE FOR LOGIN');
				console.log(response);

				if(response.data.user) {
					localStorage.setItem('user', JSON.stringify(response.data.user.result));

					dispatch(loginUserRecieved(response.data.user.result));
					browserHistory.push('/account');
				} else {
					console.error('Problem logging in');
				}

			}, function (error) {
				console.log(error);
			})
	}
}

export const logout = () => {

	localStorage.removeItem('user');

	return {
		type: types.LOGOUT
	}
}
