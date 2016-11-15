import React, {PropTypes, Component} from 'react';

import { Link } from 'react-router';
import ProductImage from './ProductImage';
import Price from './Price';

export default class ProductDetails extends Component {

	render() {
		console.log(this.props);
		if(!this.props.product) {
			return (<div className="loading">Loading...</div>);
		}
		const product = this.props.product;

		return (
			<div className="row" key={product.id}>

				<div className="col-xs-5">
					<ProductImage  productImage={this.props.product.images} />
				</div>

				<div className=" col-xs-6 product product--details" >
					<div className="product__details">
						<h3 className="product__title">{product.title}</h3>
						<p className="product__description">{product.description}</p>
						<Price price={product.price} />
						<div className="button-wrapper">
							<a href="" className="button">Add to card</a>
							<a href="" className="button">Favourite</a>
						</div>
					</div>
				</div>
				
			</div>
		)

	}
}

