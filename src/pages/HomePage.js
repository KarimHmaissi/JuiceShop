import React from 'react';
import Intro from '../components/common/Intro';
import ProductListContainer from '../containers/ProductListContainer';

import ProtoPage from './index.js';

class HomePage extends ProtoPage {

	render() {
		return (
			<div>
				<Intro />
				<div className="container container__margin-small">
					<ProductListContainer />
				</div>
			</div>
		)
	}
}


export default HomePage;
