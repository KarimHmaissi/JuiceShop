import React, { Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class LoginForm extends Component {

	render() {

		return (
			<div className="login form-wrapper">
				<h1>Login Form son!</h1>

				<form onSubmit={this.props.handleSubmit}>
					<div>
						<label htmlFor="email">Email address</label>
						<Field name="email" component="input" type="email" /> 
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<Field name="password" component="input" type="password" /> 
					</div>
					<button className="button" type="sumbmit">Login</button>
				</form>
			</div>
		)
	}
}

LoginForm = reduxForm({
	form: 'loginForm'
})(LoginForm);

export default LoginForm;