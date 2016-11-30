import React, { Component } from 'react';

export default class Postage extends Component {
	render() {
		return (
			<div className="postage">
				<div className="row">
					<div className="postage__image-wrapper">
						<div className="postage__image-wrapper">
							<img src="https://images.unsplash.com/photo-1449247666642-264389f5f5b1?dpr=2&auto=format&fit=crop&w=1500&h=NaN&q=80&cs=tinysrgb&crop=" alt="postage" />
						</div>
					</div>
					<div className="col-xs-12 col-md-6 col-md-offset-6">
						<h2 className="postage__title">Postage an ting</h2>
						<p className="postage__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, odit, ad. Esse dignissimos quaerat error beatae molestias culpa natus eum vel ullam obcaecati amet praesentium asperiores, blanditiis sint provident assumenda.</p>
					</div>
				</div>
				
			</div>
		)
	}
}