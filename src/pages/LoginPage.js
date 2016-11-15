import React, {PropTypes, Component} from 'react';
import LoginContainer from '../containers/LoginContainer';

import ProtoPage from './index.js';

class LoginPage extends ProtoPage {

	render() {
		return (
			<div>
				<LoginContainer />
			</div>
		)
	}
}


export default LoginPage;
