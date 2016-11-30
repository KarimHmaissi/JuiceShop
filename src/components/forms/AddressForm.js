import React, { Component} from 'react';
import {Field, Fieldset, reduxForm} from 'redux-form';

class AddressForm extends Component {

	render() {

		return (
			<div className="address form-wrapper">
				<p>Please enter your shipping details so we know where to send your awesome juice fam.</p>

				<form onSubmit={this.props.handleSubmit}>
					<div className="input-wrapper">
						<label htmlFor="firstName">First name</label>
						<Field name="firstName" component="input" type="text" /> 
					</div>
					<div className="input-wrapper">
						<label htmlFor="surname">Surname</label>
						<Field name="surname" component="input" type="text" /> 
					</div>
					<div className="input-wrapper">
						<label htmlFor="address1">Address 1</label>
						<Field name="address1" component="input" type="text" /> 
					</div>
					<div className="input-wrapper">
						<label htmlFor="address2">Address 2</label>
						<Field name="address2" component="input" type="text" /> 
					</div>
					<div className="input-wrapper">
						<label htmlFor="city">City</label>
						<Field name="city" component="input" type="text" /> 
					</div>

					<div className="input-wrapper">
						<label htmlFor="county">County</label>
						<Field name="county" component="input" type="text" /> 
					</div>

					<div className="input-wrapper">
						<label htmlFor="country">Country</label>
						<Field name="country" component="input" type="text" value="United Kingdom" /> 
					</div>
					
					<div className="input-wrapper">
						<label htmlFor="postcode">Postcode</label>
						<Field name="postcode" component="input" type="text" /> 
					</div>
					<button className="button" type="sumbmit">Add address</button>
				</form>
			</div>
		)
	}
}

AddressForm = reduxForm({
	form: 'addressForm'
})(AddressForm);

export default AddressForm;
