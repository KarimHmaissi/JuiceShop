import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as productActions from '../actions/product-actions';
import * as cartActions from '../actions/cart-actions';
import ProductDetails from '../components/product/ProductDetails';


class ProductContainer extends Component {
	componentWillMount() {
		const productId = this.props.routeParams.productId
		this.props.productActions.loadProductFetch(productId);
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
				<ProductDetails product={this.props.product.product} addToCart={this.props.cartActions.addProductFetch}/>
				
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		product: state.product
	}
}

function mapDispatchToProps(dispatch) {
	return {
		productActions: bindActionCreators(productActions, dispatch),
		cartActions: bindActionCreators(cartActions, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

