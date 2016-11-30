import React, { Component} from 'react';

export default class Review extends Component {

	constructor(state) {
		super(state);
		this.state = {
			showFull: false
		}
	}

	showBodyText(showFull) {
		this.setState({showFull});
	}

	loadLoadMoreButton() {
		const showFull = this.state.showFull;
		const button =	
			(<span className="review__body__show-more" onClick={() => this.showBodyText(!showFull)}> show more</span>);

		return showFull ? false : button;
	}

	loadReviewBodyText(review) {
		const bodyText = review.body;
		if(this.state.showFull || review.body.length < 500) {
			return bodyText;
		} else {
			return review.body.substring(0, 500);
		}
	}

	render() {
		const review = this.props.review;
		const bodyText = this.loadReviewBodyText(review);

		return (
			<div key={review.id} className="review">
				<div className="review__details">
					<img className="review__user" alt="avatar" src={review._embedded['jdb:user'].avatar} />
				</div>
				<div className="review__body-wrapper">
					<p className="review__stars"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i> 4.5</p>
					<p className="review__username">{review._embedded['jdb:user'].username}</p>
					<p className="review__body">
						<span dangerouslySetInnerHTML={{__html: bodyText}}></span>
						{this.loadLoadMoreButton()}
					</p>
					
				</div>
			</div>
		)

	}
}

