import React from 'react';
import CheckoutContainer from '../containers/CheckoutContainer';

import ProtoPage from './index.js';

class CheckoutPage extends ProtoPage {

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<CheckoutContainer />
					</div>
				</div>
			</div>
		)
	}
}


export default CheckoutPage;
