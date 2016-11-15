import React, {PropTypes, Component} from 'react';

import { Link } from 'react-router';
import ProductImage from './ProductImage';
import Price from './Price';

export default class ProductCard extends Component {

	render() {
		if(!this.props.product) {
			return (<div>Loading...</div>);
		}
		const product = this.props.product;

		return (<li className="product product--card" key={product.id}>
			<ProductImage  productImage={this.props.product.images} />
			<h3 className="product__title">{product.title}</h3>


			<Price price={product.price} />
			<div>
				<Link to={"product/" + product.id} className="product__link">View product</Link>
			</div>

		</li>)

	}
}