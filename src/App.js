import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        	<div className="container">
        	<Nav />
        	
       			{this.props.children} 
       		</div>
        <footer />
      </div>
    );
  }
}

export default App;
