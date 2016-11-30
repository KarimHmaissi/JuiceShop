import React, { Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as uiActions from '../../actions/ui-actions';

class Nav extends Component {
	render() {
		var user = this.props.user;
		var userElement ;

		if(user.email) {
			userElement = (
				<ul className="nav-list">
					<li><Link to="/products">Products</Link></li>
					<li><Link to="/account">Your Account</Link></li>
					<li><a onClick={this.props.logout}>Logout</a></li>
					<li><button className="button" onClick={this.props.actions.openSidebar}>Cart</button></li>
				</ul>
			)
		} else {
			userElement = (
				<ul className="nav-list">
					<li><Link to="/products">Products</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/register">Register</Link></li>
					<li><button className="button" onClick={this.props.actions.openSidebar}>Cart</button></li>
				</ul>
			)

		}

		return (
			<header>
				<div className="logo">
					<Link to="/"><h1>Juice<span>Shop</span></h1></Link>
				</div>
				{userElement}
				
			</header>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

function mapStateToProps(state, props) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(uiActions, dispatch)};
}

