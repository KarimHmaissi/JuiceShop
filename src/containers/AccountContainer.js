import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountContainer extends Component {

	componentWillMount() {
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

