import React, {PropTypes, Component} from 'react';
import Intro from '../components/common/Intro';
import ProductListContainer from '../containers/ProductListContainer';

class HomePage extends Component {

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
