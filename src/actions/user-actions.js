import * as types from './action-types';
import { routerActions } from 'react-router-redux';
import Axios from 'axios';

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

	return dispatch => {

		dispatch(loginUserRequest());

		const user = JSON.parse(localStorage.getItem('user'));

		if(user) {
			dispatch(loginUserRecieved(user));
			//TODO Problem here
			// dispatch(routerActions.push('/account'));

			return;
		}

		if(!email || !password) return;

		return Axios.post('http://localhost:8080/api/login', { email, password })
			.then(function (response) {

				if(response.data.user) {
					localStorage.setItem('user', JSON.stringify(response.data.user.result));
					dispatch(routerActions.push('/account'));


					dispatch(loginUserRecieved(response.data.user.result));
					// browserHistory.push('/account');
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
