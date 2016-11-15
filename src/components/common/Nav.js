import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';

export default class Nav extends Component {
	render() {
		var user = this.props.user;
		console.log('USER: ', user);
		var userElement ;

		if(user.user) {
			user = user.user;
			userElement = (
				<ul className="nav-list">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/products">Products</Link></li>
					<li><Link to="/account"><span>{user.first_name} </span>Your Account</Link></li>
					<li><a onClick={this.props.logout}>Logout</a></li>
				</ul>
			)
		} else {
			userElement = (
				<ul className="nav-list">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/products">Products</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/register">Register</Link></li>
				</ul>
			)

		}

		return (
			<header>
				<div className="logo">
					<h1>JuiceShop</h1>
				</div>
				{userElement}
				
			</header>
		)
	}
}