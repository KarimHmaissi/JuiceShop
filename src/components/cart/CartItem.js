import React, { Component } from 'react';

import ProductImage from '../product/ProductImage';

export default class CartItem extends Component {

	render() {
		const product = this.props.product;

		return (
			<tr key={product.id}>
				<td className="product__image__wrapper"><ProductImage productImage={product.images} /></td>
				<td className="product__title">{product.title}</td>
				<td className="product__quantity">{product.quantity}</td>
				<td className="product__price">{product.pricing.formatted.with_tax}</td>
				<td className="product__remove" onClick={() => this.props.removeItem(product.id)}>Remove X</td>
			</tr>
		);
	}
}