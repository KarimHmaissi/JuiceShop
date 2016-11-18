import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class AccountContainer extends Component {

	componentWillMount() {
		// if(!this.props.user.user) {
		// 	browserHistory.push('/login');
		// } 
	}

	render() {
		return (
			<div>
				<h1>Your account Dude</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae libero, asperiores quia vitae a temporibus, tenetur ab harum nisi quasi. Quae quaerat magni veniam, blanditiis repudiandae nostrum ratione omnis sint?</p>

				<h2>Orders</h2>
				
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		user: state.user
	}

}


export default connect(mapStateToProps)(AccountContainer);

