import React from 'react';
import LoginContainer from '../containers/LoginContainer';

import ProtoPage from './index.js';

class LoginPage extends ProtoPage {

	render() {
		return (
			<div className="container">
				<LoginContainer />
			</div>
		)
	}
}


export default LoginPage;
