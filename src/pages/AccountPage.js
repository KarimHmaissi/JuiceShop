import React from 'react';
import AccountContainer from '../containers/AccountContainer';

import ProtoPage from './index.js';

class AccountPage extends ProtoPage {

	render() {
		return (
			<div className="container">
				<AccountContainer />
			</div>
		)
	}
}


export default AccountPage;
