import React, { Component } from 'react';

import Cart from './Cart';
import CartItem from './CartItem';
import {Link} from 'react-router';

export default class CartFullWrapper extends Component {

	render() {

		return (
			<div className='cart'>
				<div className="cart__content">
					<Cart cart={this.props.cart}/>
				</div>
			</div>
		)
	}
}


