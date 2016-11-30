import React, { Component } from 'react';

export default class Address extends Component {

	render() {
		const address = this.props.address;

		return (
			<div className="address">
				<p className="address__field address__name">{address.first_name} {address.last_name}</p>
				<p className="address__field address__address1">{address.address_1}</p>
				<p className="address__field address__address2">{address.address_2}</p>
				<p className="address__field address__city">{address.city}</p>
				<p className="address__field address__county">{address.county}</p>
				<p className="address__field address__postcode">{address.postcode}</p>
				<p className="address__field address__country">{address.country.data.name}</p>
				<button className="button" onClick={() => {this.props.selectAddress(address.id)}}>Select address</button>
			</div>
		)
	}
}