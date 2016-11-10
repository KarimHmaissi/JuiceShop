import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import configureStore from './store/configure-store';
import initialState from './store/InitialState';
import moltin from './Moltin/MoltinFactory';

import ProductContainer from './containers/ProductContainer';
import HomeContainer from './containers/HomeContainer';

//Init Moltin
if(moltin) {

	moltin.Authenticate(function(response) {
		console.log('Moltin loaded: ', moltin);
		console.log('Moltin Auth Loaded: ', response);
		
		let auth = {
			accessToken: response.access_token,
			expires: response.expires,
			identifier: response.identifier,
			tokenType: response.token_type,
		};

		initialState.moltin.auth = Object.assign({}, initialState.moltin.auth, auth);
		initialState.moltin.isAuth = true;

		const store = configureStore(initialState);

		ReactDOM.render(
		  <Provider store={store}>
		  	<Router history={browserHistory}>
		  		<Route component={App}>
		  			<Route path="/"  component={HomeContainer}/>
		  			<Route path="/products"  component={ProductContainer}/>
		  		</Route>

		  	</Router>
		  </Provider>,
		  document.getElementById('root')
		);

		
	}, function(error) {
		console.error('Moltin failed to Auth. All hope is lost.');
	});

} else {
	console.error('Moltin failed. All hope is lost');
}


