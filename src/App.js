import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';

import * as userActions from './actions/user-actions';

class App extends Component {

  componentWillMount() {
    this.props.actions.loginUserFetch();
  }

  render() {
    return (
      <div className="App">
        	<div className="container">
        	<Nav user={this.props.user} logout={this.props.actions.logout}/>
        	
       			{this.props.children} 
       		</div>
        <footer />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
