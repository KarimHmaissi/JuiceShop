import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routerActions } from 'react-router-redux';
import { browserHistory } from 'react-router';
import * as cartActions from '../actions/cart-actions';
import * as uiActions from '../actions/ui-actions';
import * as addressActions from '../actions/address-actions';

import AddressForm from '../components/forms/AddressForm';
import Address from '../components/address/Address';

class AddressContainer extends Component {

	constructor(props) {
		super(props);
		this.state= {
			showForm: false,
			firstLoad: true
		}
	}

	componentWillMount() {
		const customerId = this.props.user.id;
		this.props.actions.loadAddressesFetch(customerId);

		if(this.props.addresses.length < 1 && !this.state.firstLoad) {
			this.setState({showForm: true});
		}

		this.setState({firstLoad :false});
	}

	handleSubmit(values) {
		this.props.actions.addAddressFetch(
			this.props.user.id,
			this.props.user.email, 
			this.props.user.password, 
			values.firstName,
			values.surname,
			values.address1,
			values.address2,
			values.county,
			values.country,
			values.postcode
		);
	}

	showForm() {
		console.log('SHOWFORM');
		this.setState({showForm: true});
	}

	selectAddress(addressId) {
		const addressResults = this.props.addresses.filter((address) => {
			return addressId === address.id; 
		});

		if(addressResults.length > 0) {
			this.props.actions.selectAddress(addressResults[0]);
			console.log('Haha karim is awesome: ', addressResults[0]);
		}
	}

	buttonOrForm() {
		if(this.state.showForm) {
			return (<AddressForm onSubmit={this.handleSubmit.bind(this)}/>);
		} else {
			return (<button className="button" onClick={this.showForm.bind(this)}>Add address</button>);
		}
	}

	renderAddresses() {
		console.log('renderAddresses: ', this.props);

		return this.props.addresses.map((address) => {
			return (<Address key={address.id} address={address} selectAddress={this.selectAddress.bind(this)}/>)
		});
	}

	render() {
		return (
			<div className="shipping">
				<h2>Address</h2>
				<div className="adddresses group">
					{this.renderAddresses()}
				</div>
				{this.buttonOrForm()}
			</div>
		)
	}
}

function mapStateToProps(state, props) {

	return {
		user: state.user,
		cart: state.cart,
		ui: state.ui,
		addresses: state.addresses
	}

}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Object.assign({}, cartActions, uiActions, routerActions, addressActions), dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressContainer);


