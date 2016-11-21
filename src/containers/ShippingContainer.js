import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routerActions } from 'react-router-redux';
import { browserHistory } from 'react-router';
import * as cartActions from '../actions/cart-actions';
import * as uiActions from '../actions/ui-actions';

class ShippingContainer extends Component {

	componentWillMount() {

	}

	render() {

		return (
			<div className="shipping">
			</div>
		)
	}
}

function mapStateToProps(state, props) {

	return {
		user: state.user,
		cart: state.cart,
		ui: state.ui,
	}

}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Object.assign({}, cartActions, uiActions, routerActions), dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShippingContainer);


