import React, { Component } from 'react';

import CartItem from './CartItem';
import {Link} from 'react-router';

export default class Cart extends Component {

	render() {
		const mapStoreToProducts = () => {
			if(!this.props.cart.contents) return;

			return Object.keys(this.props.cart.contents).map((key) => {
				const product = this.props.cart.contents[key];
				return (
					<CartItem key={product.id} product={product} removeItem={this.props.removeItem}/>
				)
			});
		}

		const getPrice = () => {
			if (!this.props.cart.totals) return;

			return this.props.cart.totals.pre_discount.formatted.with_tax;
		}

		return (
			<div>
				<h1>Your Cart</h1>
				<table className="product-card-small">
					<tbody>
						{mapStoreToProducts()}
					</tbody>

				</table>
				<div className="total price">
					<h4>TOTAL: {getPrice()}</h4>
				</div>
			</div>	
		)
	}
}


