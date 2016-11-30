import React, { Component} from 'react';
import ProductReview from './ProductReview';

export default class Reviews extends Component {

	constructor(state) {
		super(state);
		this.state = {
			showFull: false
		}
	}

	showMoreReviews(showFull) {
		this.setState({showFull});
	}

	loadLoadMoreButton() {

		const showFull = this.state.showFull;

		if(showFull) {
			return false;
		}

		return (<button className="button" onClick={() => this.showMoreReviews(!showFull)}>Load More Reviews</button>)
	}

	loadReviews() {

		if(this.props.reviews.length < 1) return;

		let cutArray = this.props.reviews;

		if(this.props.reviews.length > 5) {
			cutArray = this.props.reviews.slice(0, 4);
		}

		if(this.state.showFull) {
			cutArray = this.props.reviews;
		}

		return cutArray.map((review) => {

			return (
				<ProductReview review={review} key={review.id} />
			)
		});
	}

	loadReviewOverview() {
		if(this.props.reviews.length < 1) return;

		const reviewDetails = this.props.reviews[0]._embedded['jdb:subject'];

		return (
			<div className="review-overview">
				<h2>Reviews</h2>

				<div className="overview__score">
					<p className="overview__score__value">Stars: {reviewDetails.stars}</p>
				</div>
				<div className="overview__total-reviews">
					<p className="overview__total-reviews">{reviewDetails.reviews} total reviews</p>
				</div>
			</div>
		)
	}

	render() {

		return (
			<div className="container-small">
				<div className="row">
					{this.loadReviewOverview()}
					<div className="reviews">
						{this.loadReviews()}
						<div className="reviews__load-more">
							{this.loadLoadMoreButton()}
						</div>
					</div>
				</div>
			</div>
		)

	}
}

