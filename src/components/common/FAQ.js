import React, { PropTypes, Component } from 'react';

export default class FAQ extends Component {
	render() {
		return (
			<div className="faq row">
				<div className="faq__header col-xs-12">
					<h2>Frequently Asked Questions</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>

				<div className="faq__content col-xs-12">
					<div className="row">
						<div className="col-xs-6">
							<div className="faq__question">
								<h4 className="question__title">What Shipping Methods are Available?</h4>
								<p className="question__answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. </p>
							</div>

							<div className="faq__question">
								<h4 className="question__title">How Long Will it Take To Get My Package?</h4>
								<p className="question__answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem.</p>
							</div>
						</div>

						<div className="col-xs-6">
							<div className="faq__question">
								<h4 className="question__title">How Do I Track My Order?</h4>
								<p className="question__answer">In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor.</p>
							</div>

							<div className="faq__question">
								<h4 className="question__title">Do I Need A Account To Place Order?</h4>
								<p className="question__answer">Aenean malesuada vitae nibh id lacinia. Vestibulum imperdiet viverra lobortis. Quisque placerat sapien non placerat interdum. </p>
							</div>
						</div>
					</div>
					
					
				</div>
			</div>
		)
	}
}