import React, { Component} from 'react';

export default class Price extends Component {

	render() {
		if(!this.props.price) {
			return (<div></div>);
		}

		const price = this.props.price;

		return (
			<div className="product__price-wrapper">
				<p className="product__price">{price.data.formatted.with_tax}</p>
			</div>
		)
	}
}