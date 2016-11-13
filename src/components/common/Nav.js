import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';

export default class Nav extends Component {
	render() {
		return (
			<header>
				<div className="logo">
					<h1>JuiceShop</h1>
				</div>
				<ul className="nav-list">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/products">Products</Link></li>
					<li><Link to="/login">Login</Link></li>
				</ul>
			</header>
		)
	}
}