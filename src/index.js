import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './fonts.css';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';

import configureStore from './store/configure-store';
import initialState from './store/InitialState';
import moltin from './Moltin/MoltinFactory';

import ProductPage from './pages/ProductPage';
import ProductListPage from './pages/ProductListPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AccountPage from './pages/AccountPage';
import CartPage from './pages/CartPage';


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
		const history = syncHistoryWithStore(browserHistory, store);

		// Redirects to /login by default
		const UserIsAuthenticated = UserAuthWrapper({
		  authSelector: state => state.user, // how to get the user state
		  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
		  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
		});

		ReactDOM.render(
		  <Provider store={store}>
		  	<Router history={browserHistory}>
		  		<Route component={App}>
		  			<Route path="/"  component={HomePage}/>
		  			<Route path="/products"  component={ProductListPage}/>
		  			<Route path="/product/:productId"  component={ProductPage}/>
		  			<Route path="/login"  component={LoginPage}/>
		  			<Route path="/register"  component={RegisterPage}/>
		  			<Route path="/account"  component={UserIsAuthenticated(AccountPage)}/>
		  			<Route path="/cart"  component={CartPage}/>
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


