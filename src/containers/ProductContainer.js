import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as productActions from '../actions/product-actions';
import * as cartActions from '../actions/cart-actions';
import * as reviewActions from '../actions/review-actions';
import ProductDetails from '../components/product/ProductDetails';


class ProductContainer extends Component {

	componentWillMount() {
		const productId = this.props.routeParams.productId;

		// this.props.reviewActions.loadReviewsFetch(productId);

		//check if product is part of products
		const cachedProduct = this.props.products.filter((product) => {
			return product.id === productId
		});

		if(cachedProduct.length > 0) {
			this.props.productActions.loadProductFetch(true, productId, cachedProduct[0]);
		} else {
			this.props.productActions.loadProductFetch(false, productId);
		}

	}

	componentWillUnmount() {	
		this.props.productActions.resetProduct();
	}

	render() {
		if(!this.props.product) {
			return (
				<div className="loading">Loading product</div>
			)
		}
		return (
			<div>
				<ProductDetails product={this.props.product.product} reviews={this.props.reviews} addToCart={this.props.cartActions.addProductFetch}/>
				
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		product: state.product,
		products: state.products,
		reviews: state.reviews
	}
}

function mapDispatchToProps(dispatch) {
	return {
		productActions: bindActionCreators(productActions, dispatch),
		cartActions: bindActionCreators(cartActions, dispatch),
		reviewActions: bindActionCreators(reviewActions, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

