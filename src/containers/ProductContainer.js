import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as productActions from '../actions/product-actions';

import ProductList from './ProductList';

class ProductContainer extends Component {

	componentWillMount() {
		console.log('Loaded products container');
		this.props.actions.loadProductsFetch();
	}

	render() {
		// console.log(this.props);
		// console.log(this.state);

		// let productsList = null;

		// if(this.props.products) {
		// 	const products = this.props.products.products.map((product) => {
				

		// 		return (
		// 		<li className="product" key={product.id}>
		// 			<h3>{product.title}</h3>
		// 			{img}
		// 			<p>{product.description}</p>

		// 		</li>);
		// 	});

		// 	productsList = (
		// 		<ul className="product-list">{products}</ul>
		// 	);
		// }

		return (
			<div>
				<ProductList products={this.props.products}/>
			</div>
		)
	}
}

function mapStateToProps(state, props) {
	return {
		products: state.products
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(productActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
