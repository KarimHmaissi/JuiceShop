import React from 'react';

import ProductContainer from '../containers/ProductContainer';
import FAQ from '../components/common/FAQ';
import Returns from '../components/common/Returns';
import Postage from '../components/common/Postage';

import ProtoPage from './index.js';

class ProductPage extends ProtoPage {

	render() {
		return (
			<div className="container">
				<ProductContainer routeParams={{productId: this.props.routeParams.productId}}/>
				<div className="container-small">
					<FAQ />
					<Returns />
					<Postage />
				</div>
			</div>
		)
	}
}

export default ProductPage;
