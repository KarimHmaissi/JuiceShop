import React, {PropTypes, Component} from 'react';
import RegisterContainer from '../containers/RegisterContainer';

import ProtoPage from './index.js';

class RegisterPage extends ProtoPage {

	render() {
		return (
			<div>
				<RegisterContainer />
			</div>
		)
	}
}


export default RegisterPage;
