import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/user-actions';

import LoginForm from '../components/forms/LoginForm';


class LoginContainer extends Component {
	componentWillMount() {

	}

	handleSubmit(values) {
		if(!values.email || !values.password) {
			console.log('Missing values');
			return;
		}
		console.log(this.props);
		this.props.actions.loginUserFetch(values.email, values.password);
		console.log('onLoginSubmit: ', values);
	}

	render() {

		return (
			<div>
				<LoginForm onSubmit={this.handleSubmit.bind(this)}/>
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		user: state.user
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	}	
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

