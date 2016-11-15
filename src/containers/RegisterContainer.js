import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import RegisterForm from '../components/forms/RegisterForm';


class RegisterContainer extends Component {
	componentWillMount() {
		console.log('Puase');
	}

	handleSubmit(values) {
		console.log('onLoginSubmit: ', values);
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

