import React, {PropTypes, Component} from 'react';

import ProductListContainer from '../containers/ProductListContainer';
import FAQ from '../components/common/FAQ';
import Returns from '../components/common/Returns';
import Postage from '../components/common/Postage';

import ProtoPage from './index.js';

class ProductListPage extends ProtoPage {

	render() {
		return (
			<div>
				<ProductListContainer />
				<FAQ />
				<Returns />
				<Postage />
			</div>
		)
	}
}

export default ProductListPage;
