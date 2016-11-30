import React from 'react';

import ProductContainer from '../containers/ProductContainer';
import ReviewContainer from '../containers/ReviewContainer';
import FAQ from '../components/common/FAQ';
import Returns from '../components/common/Returns';
import Postage from '../components/common/Postage';

import ProtoPage from './index.js';

class ProductPage extends ProtoPage {

	render() {
		return (
			<div>
				<div className="container container--padding-bottom">
					<ProductContainer routeParams={{productId: this.props.routeParams.productId}}/>
					
					
				</div>
				<div className="container--grey container--padding-bottom">
					<ReviewContainer routeParams={{productId: this.props.routeParams.productId}}/>
				</div>

				<div className="container-small">
					<FAQ />
					<Returns />
				</div>
				<div>
					<Postage />
				</div>
			</div>
		)
	}
}

export default ProductPage;
