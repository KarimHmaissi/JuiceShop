import React, { Component} from 'react';

import ProductImage from './ProductImage';
import Price from './Price';

export default class ProductDetails extends Component {


	addToCart(e) {
		this.props.addToCart(this.props.product.id);
	}

	loadReviews() {
		console.log("FFFS: ",this.props.reviews);

		if(this.props.reviews.length < 1) return;
		return this.props.reviews.map((review) => {
			return (
				<div key={review.id} className="review col-xs-6">
					<div className="review__user">
					<img alt="avatar" src={review._embedded['jdb:user'].avatar} />
					<p>{review._embedded['jdb:user'].username}</p>

					</div>
					<p className="review__stars">Stars: {review.stars}</p>
					<p className="review__body">{review.body}</p>
				</div>
			)
		});
	}

	render() {
		console.log('ProductDetails:', this.props);

		if(!this.props.product) {
			return (<div className="loading">Loading...</div>);
		}
		const product = this.props.product;

		return (

			<div>
				<div className="row product__wrapper--relative" key={product.id}>
					

					<div className=" col-xs-12 col-md-6 col-md-offset-1  product product--details" >
						<div className="product__top">
							<p><span>Brand: </span>Milk Carton</p>
							<p><span>Reviews: </span>27 reviews</p>
						</div>
						<div className="product__details">
							<h3 className="product__title">{product.title}</h3>

							<div className="product__selectors">
								<p>Nictoine Level</p>
								<ul className="inline-list product__selector">
									<li>6mg</li>
									<li>6mg</li>
									<li>6mg</li>
								</ul>
							</div>
							<div className="product__selectors">
								<p>Bottle size</p>
								<ul className="inline-list product__selector">
									<li>12ml</li>
									<li>18ml</li>
									<li>130ml</li>
								</ul>
							</div>

							<p className="product__description">{product.description}</p>
							<Price price={product.price} />

							<div className="product__cta">
								<ul className="product__cta__benefits">
									<li className="product__cta__benefit">Buy before <span>15:00 (3 hours)</span> to recieve this juice by <span>tommorow (15 November)</span></li>
									<li className="product__cta__benefit">Free postage on orders over $20 </li>
									<li className="product__cta__benefit">Top rated juice on juice shop.</li>
								</ul>
								<button className="button" onClick={this.addToCart.bind(this)}><i className="fa fa-2x fa-shopping-cart" aria-hidden="true"></i> Add to cart</button>
								<p className="help">Clicking the above button will add this juice to your cart. You will not be asked for any information until your ready to checkout. </p>

							</div>
						</div>
					</div>
					<div className="product__image--fixed">
						<ProductImage  productImage={this.props.product.images} />
					</div>
					
				</div>
				<div className="container-small">
					<div className="row">
						{this.loadReviews()}
					</div>
				</div>
			</div>
		)

	}
}

