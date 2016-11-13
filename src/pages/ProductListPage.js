import React, {PropTypes, Component} from 'react';

import ProductListContainer from '../containers/ProductListContainer';
import FAQ from '../components/common/FAQ';
import Returns from '../components/common/Returns';
import Postage from '../components/common/Postage';

class ProductListPage extends Component {

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
