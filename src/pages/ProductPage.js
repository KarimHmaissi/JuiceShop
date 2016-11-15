import React, {PropTypes, Component} from 'react';

import Intro from '../components/common/Intro';
import ProductContainer from '../containers/ProductContainer';
import FAQ from '../components/common/FAQ';
import Returns from '../components/common/Returns';
import Postage from '../components/common/Postage';

import ProtoPage from './index.js';

class ProductPage extends ProtoPage {

	render() {
		console.log('PRODUCTPAGE: ', this.props);
		return (
			<div>
				<ProductContainer routeParams={{productId: this.props.routeParams.productId}}/>
				<FAQ />
				<Returns />
				<Postage />
			</div>
		)
	}
}

export default ProductPage;
