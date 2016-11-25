import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddressContainer from './AddressContainer';
import CartContainer from './CartContainer';
import * as checkoutActions from '../actions/checkout-actions';

class CheckoutContainer extends Component {

	componentWillMount() {
		console.log('CheckoutContainer');

		// attempt to build store.checkout - information needed to checkout


	}

	completeOrder() {
		//check everything here - redirect to section if missing
		console.log('Checking out order');

		//time to checkout fam!
		// customer, billTo, shipTo='bill_to', gateway='dummy'

		// const billTo = ;
		const customer = this.props.user;

		// this.props.actions.loadCheckoutFetch(customer, billTo);
	}

	render() {
		return (
			<div className='checkout'>
				<h1>Checkout</h1>
				<CartContainer />
				<AddressContainer />
				<div className="button-wrapper">
					<button className="button" onClick={this.completeOrder.bind(this)}>Complete Order</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(store, props) {
	return {
		checkout: store.checkout,
		user: store.user,
		addresses: store.addresses
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(checkoutActions, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
