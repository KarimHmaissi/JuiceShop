import React from 'react';
import CartContainer from '../containers/CartContainer';

import ProtoPage from './index.js';

class CartPage extends ProtoPage {

	render() {
		return (
			<div className="container">
				<CartContainer />
			</div>
		)
	}
}


export default CartPage;
