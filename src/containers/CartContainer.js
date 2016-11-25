import React, {Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routerActions } from 'react-router-redux';
import { browserHistory } from 'react-router';

import * as cartActions from '../actions/cart-actions';
import * as uiActions from '../actions/ui-actions';
import ProductImage from '../components/product/ProductImage';
import CartSidebarWrapper from '../components/cart/CartSidebarWrapper';
import CartFullWrapper from '../components/cart/CartFullWrapper';
import {Link} from 'react-router';

class CartContainer extends Component {

	componentWillMount() {
		this.props.actions.getCartFetch();
	}

	checkout() {
		//close cart sidebar
		this.props.actions.closeSidebar();

		browserHistory.push('/checkout');
	}

	removeItem(productKey) {
		this.props.actions.removeProductFetch(productKey);
	}

	closeSidebar() {
		console.log('CLOSE SIDEBAR');
		this.props.actions.closeSidebar();
	}

	render() {
		if(this.props.inSidebar) {
			return (<CartSidebarWrapper cart={this.props.cart} 
				  sidebarOpen={this.props.ui.sidebarOpen}
				  checkout={this.checkout.bind(this)} 
				  closeSidebar={this.closeSidebar.bind(this)}
				  removeItem={this.removeItem.bind(this)} />)
		} else {
			return (<CartFullWrapper cart={this.props.cart} 
				  sidebarOpen={this.props.ui.sidebarOpen}
				  checkout={this.checkout.bind(this)} 
				  closeSidebar={this.closeSidebar.bind(this)}
				  removeItem={this.removeItem.bind(this)} />)
		}

		
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

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

