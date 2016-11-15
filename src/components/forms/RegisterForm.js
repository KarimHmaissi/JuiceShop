import React, {PropTypes, Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class RegisterForm extends Component {

	render() {

		return (
			<div className="register form-wrapper">
				<h1>Register Form son!</h1>

				<form onSubmit={this.props.handleSubmit}>
					<div>
						<label htmlFor="name">Full Name</label>
						<Field name="name" component="input" type="text" /> 
					</div>
					<div>
						<label htmlFor="email">Email address</label>
						<Field name="email" component="input" type="email" /> 
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<Field name="password" component="input" type="password" /> 
					</div>
					<div>
						<label htmlFor="passwordConfirm">Password Confirmation</label>
						<Field name="passwordConfirm" component="input" type="password" /> 
					</div>
					<button className="button" type="sumbmit">Register</button>
				</form>
			</div>
		)
	}
}

RegisterForm = reduxForm({
	form: 'registerForm'
})(RegisterForm);

export default RegisterForm;