import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchthisthat} from './store'
import { Button, Container } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount =() => this.props.fetchthisthat()
  handleButtonClick = () => this.props.fetchthisthat()
  render() {
    
    console.log(this.props)
    return (
      <Container>
        <h1>Let me pitch you this startup idea.</h1>
        <p className="App-intro">
          What about {this.props.thisthat.this} for {this.props.thisthat.that}.
        </p>
        <Button onClick={this.handleButtonClick}  color='green'>Refresh</Button>
      </Container>
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
