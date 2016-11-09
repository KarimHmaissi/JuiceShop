import React, {PropTypes, Component} from 'react';

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
				//setup image
				let img = null;

				if(product.images.length > 0) {
					const imgSrc = product.images[0].url.http;
					img = (<img className="product__image" src={imgSrc} />)
				}

				return <li className="product" key={product.id}>
					<h3>{product.title}</h3>
					{img}
					<p>{product.description}</p>

				</li>

			})}
		</ul>
		</div>)
	}

}