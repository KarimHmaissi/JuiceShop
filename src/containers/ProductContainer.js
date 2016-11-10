import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as productActions from '../actions/product-actions';

import ProductList from '../components/ProductList';

class ProductContainer extends Component {

	componentWillMount() {
		this.props.actions.loadProductsFetch();
	}

	render() {
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
