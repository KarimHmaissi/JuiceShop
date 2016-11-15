import React, {PropTypes, Component} from 'react';
import Intro from '../components/common/Intro';
import ProductListContainer from '../containers/ProductListContainer';

import ProtoPage from './index.js';

class HomePage extends ProtoPage {

	render() {
		return (
			<div>
				<Intro />
				<ProductListContainer />
			</div>
		)
	}
}


export default HomePage;
