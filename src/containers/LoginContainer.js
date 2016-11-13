import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginForm from '../components/login/LoginForm';


class ProductContainer extends Component {
	componentWillMount() {
	}



	render() {

		return (
			<div>
				<LoginForm />
			</div>
		);
	}
}

export default ProductContainer;

