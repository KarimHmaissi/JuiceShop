import React, {PropTypes, Component} from 'react';
import Product from './Product';

export default class ProductList extends Component {

	render() {
		console.log('PRODUCTLIST KICKING OFF');
		console.log(this.props);

		if(!this.props.products) {
			return (<div>Products are still loading son!!</div>);
		}

		return (<div>
		<h2>Product List Son!</h2>
		<ul className="product-list">
			{this.props.products.products.map((product) => {
				return <Product key={product.id} product={product}/>
			})}
		</ul>
		</div>)
	}

}