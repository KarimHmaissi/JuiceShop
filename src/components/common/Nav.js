import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';

export default class Nav extends Component {
	render() {
		return (
			<ul className="nav">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/products">Products</Link></li>
			</ul>
		)
	}
}