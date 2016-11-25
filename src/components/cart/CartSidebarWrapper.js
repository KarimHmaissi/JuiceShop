import React, { Component } from 'react';

import Cart from './Cart';
import CartItem from './CartItem';
import {Link} from 'react-router';

export default class CartSidebarWrapper extends Component {

	render() {

		return (
			<div className={'cart ' + (this.props.sidebarOpen ? 'cart-show' : 'cart-hidden')}>
				<div className="cart__content cart__fixed">
					<button className="close-sidebar" onClick={this.props.closeSidebar}>X</button>

					<Cart cart={this.props.cart} checkout={this.props.checkout} removeItem={this.props.removeItem}/>
					<div className="button-wrapper">
						<button className="button" onClick={this.props.checkout}>Checkout</button>
					</div>

				</div>
				<div className="cart__background" onClick={this.props.closeSidebar}></div>
				
			</div>
		)
	}
}


