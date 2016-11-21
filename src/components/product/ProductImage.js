import React, { Component} from 'react';

export default class ProductImage extends Component {

	getImage() {
		let img = null;
		const images = this.props.productImage;

		if(images.length > 0) {
			const imgSrc = images[0].url.http;
			return (<img alt="product" className="product__image" src={imgSrc} />)
		}

		return;
	}

	render() {
		if(!this.props.productImage) {
			return (<div></div>);
		}

		//setup image
		const img = this.getImage();

		return (
			<div className="product__image-wrapper">
				{img}
			</div>
		)
	}
}