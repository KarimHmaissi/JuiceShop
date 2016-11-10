import React, {PropTypes, Component} from 'react';

export default class Product extends Component {

	getImage() {
		let img = null;
		const product = this.props.product;

		if(product.images.length > 0) {
			const imgSrc = product.images[0].url.http;
			return img = (<img className="product__image" src={imgSrc} />)
		}

		return;
	}

	render() {
		const product = this.props.product;

		//setup image
		const img = this.getImage();

		return (<li className="product" key={product.id}>
			<h3>{product.title}</h3>
			{img}
			<p>{product.description}</p>

		</li>)

	}
}