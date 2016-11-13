import React, { PropTypes, Component } from 'react';

export default class Intro extends Component {
	render() {
		return (
			<div className="intro">
				<h2 className="intro__title">Welcome to JuiceShop</h2>
				<p className="intro__subtitle">A new way to buy premium eJuices</p>
			</div>
		)
	}
}