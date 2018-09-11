import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchthisthat} from './store'
import {Button} from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
 
  handleButtonClick = () => this.props.fetchthisthat()
  render() {
    
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Let me pitch you a startup idea.</h1>
        </header>
        <p className="App-intro">
          It's like {this.props.thisthat.this} for {this.props.thisthat.that}.
        </p>
        <Button onClick={this.handleButtonClick}>Click</Button>
      </div>
    );
  }
}

 const mapState = (state) => {
    return {
      thisthat: state.thisthat
    }
  };
const mapDispatch = {fetchthisthat};
 
export default connect(mapState, mapDispatch)(App);
