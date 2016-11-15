import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as productActions from '../actions/product-actions';
import ProductDetails from '../components/product/ProductDetails';


class ProductContainer extends Component {
	componentWillMount() {
		const productId = this.props.routeParams.productId
		console.log('ProductContainer, ID: ', this.props);
		this.props.actions.loadProductFetch(productId);
	}

	componentWillUnmount() {	
		this.props.actions.resetProduct();
	}

	render() {
		console.log('ProductCONTAINER render - ', this.props);
		if(!this.props.product) {
			return (
				<div className="loading">Loading product</div>
			)
		}
		return (
			<div>
				<ProductDetails product={this.props.product.product} />
				
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
		actions: bindActionCreators(productActions, dispatch) 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

