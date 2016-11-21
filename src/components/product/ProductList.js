import React, { Component} from 'react';
import ProductCard from './ProductCard';

export default class ProductList extends Component {

	render() {

		if(!this.props.products.length) {
			return (<div className="loading">Products are still loading son!!</div>);
		}

		return (
			<div className="row">

				<div className="col-xs-12">
					<ul className="product-list">
						{this.props.products.map((product) => {
							return <ProductCard key={product.id} product={product}/>
						})}
					</ul>
				</div>
				
			</div>
		)
	}

}