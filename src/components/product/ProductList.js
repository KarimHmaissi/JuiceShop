import React, {PropTypes, Component} from 'react';
import ProductCard from './ProductCard';

export default class ProductList extends Component {

	render() {
		console.log('PRODUCTLIST KICKING OFF');
		console.log(this.props);

		if(!this.props.products) {
			return (<div className="loading">Products are still loading son!!</div>);
		}

		return (
			<div className="row">

				<div className="col-xs-12">
					<ul className="product-list">
						{this.props.products.products.map((product) => {
							return <ProductCard key={product.id} product={product}/>
						})}
					</ul>
				</div>
				
			</div>
		)
	}

}