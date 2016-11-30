import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as reviewActions from '../actions/review-actions';
import ProductReviews from '../components/product/ProductReviews';


class ReviewContainer extends Component {

	componentWillMount() {
		const productId = this.props.routeParams.productId;
		this.props.reviewActions.loadReviewsFetch(productId);
	}

	render() {
		if(this.props.reviews.length < 0) {
			return (
				<div className="loading">Loading reviews</div>
			)
		}
		return (
			<div>
				<ProductReviews reviews={this.props.reviews}/>
				
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		reviews: state.reviews
	}
}

function mapDispatchToProps(dispatch) {
	return {
		reviewActions: bindActionCreators(reviewActions, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);

