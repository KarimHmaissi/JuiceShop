import * as types from './action-types';
import axios from 'axios';
import juiceDBKey from '../keys/juiceDB';

var juicedbAxios = axios.create({
  baseURL: 'https://api.juicedb.com',
  timeout: 100000,
  headers: {'Authorization': 'Bearer ' + juiceDBKey}
});

export const loadReviewsRequest = () => {
	return {
		type: types.LOAD_REVIEWS_REQUEST,
		payload: {}
	}
}

export const loadReviewsRecieved = (response) => {
	return {
		type: types.LOAD_REVIEWS_RECIEVED,
		payload: response
	}
}

export const loadReviewsFetch = () => {

	return dispatch => {

		dispatch(loadReviewsRequest());

		const response = (response) => {
			console.log('STOP HERE');
			dispatch(loadReviewsRecieved(response.data._embedded['jdb:reviews']));
		}

		const error = (error) => {
			console.error('JUICEDB RESPONSE: ', error);
		}

		juicedbAxios.get('https://api.juicedb.com/juice/28220/reviews').then(response).catch(error);
	}
}





