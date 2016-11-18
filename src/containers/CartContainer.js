import React, {PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart-actions';
import * as uiActions from '../actions/ui-actions';
import ProductImage from '../components/product/ProductImage';
import {Link} from 'react-router';

class CartContainer extends Component {

	componentWillMount() {
		this.props.actions.getCartFetch();
	}

	checkout() {
		console.log('Checking out son');
	}

	removeItem(productKey) {
		this.props.actions.removeProductFetch(productKey);
	}

	closeSidebar() {
		this.props.actions.closeSidebar();
	}

	render() {
		console.log('CARTCONTAINER', this.props);

		 const mapStoreToProducts = () => {
		 	if(!this.props.cart.contents) return;
			return Object.keys(this.props.cart.contents).map((key) => {
				const product = this.props.cart.contents[key];
				return (<li key={product.id}>
					<div className="product-card-small">
						<ProductImage productImage={product.images} />
						<p className="product__title">{product.title}</p>
						<p className="product__quantity">{product.quantity}</p>
						<p className="product__price">{product.pricing.formatted.with_tax}</p>
						<button className="product__remove" onClick={() => this.removeItem(key)}>Remove X</button>
					</div>

				</li>)
			});
		}

		const getPrice = () => {
			if (!this.props.cart.totals) return;

			return this.props.cart.totals.pre_discount.formatted.with_tax;
		}

		return (
			<div className={'cart ' + (this.props.ui.sidebarOpen ? 'cart-show' : 'cart-hidden')}>

				<button className="product__remove" onClick={this.closeSidebar.bind(this)}>Close</button>

				<p>CART</p>
				<ul className="inline-list product-card-list">
				{mapStoreToProducts()}
				</ul>
				<div className="total price">
					<h4>TOTAL: {getPrice()}</h4>
				</div>

				<div className="button-wrapper">
					<Link to="/cart" className="button">Go To Cart</Link>
					<button className="button" onClick={this.checkout.bind(this)}>Checkout</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, props) {

	return {
		user: state.user,
		cart: state.cart,
		ui: state.ui,
		// products: state.products.filter((product) => {
		// 	if(state.cart.includes(product.id)) {
		// 		return product;
		// 	}
		// })
	}

}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Object.assign({}, cartActions, uiActions), dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);