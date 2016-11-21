import React from 'react';
import CheckoutContainer from '../containers/CheckoutContainer';

import ProtoPage from './index.js';

class CheckoutPage extends ProtoPage {

	render() {
		return (
			<div className="container">
				<CheckoutContainer />
			</div>
		)
	}
}


export default CheckoutPage;
