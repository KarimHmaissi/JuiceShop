import React, { Component } from 'react';

import RegisterForm from '../components/forms/RegisterForm';


class RegisterContainer extends Component {
	componentWillMount() {
	}

	handleSubmit(values) {
	}

	render() {

		return (
			<div>
				<RegisterForm onSubmit={this.handleSubmit}/>
			</div>
		);
	}
}

export default RegisterContainer;

