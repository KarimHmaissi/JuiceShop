import React, {PropTypes, Component} from 'react';
import CartContainer from '../containers/CartContainer';

import ProtoPage from './index.js';

class CartPage extends ProtoPage {

	render() {
		return (
			<div>
				<CartContainer />
			</div>
		)
	}
}


export default CartPage;
