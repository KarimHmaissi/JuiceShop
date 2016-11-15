import React, {PropTypes, Component} from 'react';
import AccountContainer from '../containers/AccountContainer';

import ProtoPage from './index.js';

class AccountPage extends ProtoPage {

	render() {
		return (
			<div>
				<AccountContainer />
			</div>
		)
	}
}


export default AccountPage;
