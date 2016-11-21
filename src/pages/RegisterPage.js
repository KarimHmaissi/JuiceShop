import React from 'react';
import RegisterContainer from '../containers/RegisterContainer';

import ProtoPage from './index.js';

class RegisterPage extends ProtoPage {

	render() {
		return (
			<div className="container">
				<RegisterContainer />
			</div>
		)
	}
}


export default RegisterPage;
