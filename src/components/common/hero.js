import React, { Component } from 'react';

export default class Hero extends Component {
	render() {
		return (
			<div className="hero">
				<div className="hero__background"></div>
				<div className="hero__content">
					<h2 className="hero__title">Welcome to JuiceShop</h2>
					<p className="hero__subtitle">A new way to buy premium eJuices</p>
				</div>
			</div>
		)
	}
}