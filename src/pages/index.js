import React, {PropTypes, Component} from 'react';

class ProtoPage extends Component {

	componentWillMount() {
		console.log('WINDOW> SCROLL');
		window.scrollTo(0,0);
	}
}


export default ProtoPage;
