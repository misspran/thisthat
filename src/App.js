import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchthisthat} from './store'
import { 
  Button, 
  Container, 
  Grid, 
  Image 
} from 'semantic-ui-react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  EmailIcon
} from 'react-share';
import './App.css';

class App extends Component {
  componentDidMount =() => this.props.fetchthisthat()
  handleButtonClick = () => this.props.fetchthisthat()
  render() {
    
    console.log(this.props)
    return (
      <Container>
      <Grid stackable >
      <Grid.Row  verticalAlign='middle' columns={2}>
      <Grid.Column floated="left" id=".text" stretched>
        
        <h1>Let me pitch you this startup idea...</h1>
        <p className="App-intro">
          How about <span id="this">{this.props.thisthat.this}</span> for <span id="that">{this.props.thisthat.that}</span>.
        </p>
        <Button onClick={this.handleButtonClick}  color='magenta' size='massive'>Refresh</Button>
        <div className="social-share">
        <FacebookShareButton url={"http://thisthatapp.surge.sh"} className="share-button">
          <FacebookIcon size={42} quote={'Let me pitch you this startup idea...'} round />
        </FacebookShareButton>
        <TwitterShareButton url={"http://thisthatapp.surge.sh"} className="share-button" title={'Let me pitch you this startup idea...'}>
          <TwitterIcon size={42} round />
        </TwitterShareButton>
        <RedditShareButton url={"http://thisthatapp.surge.sh"} className="share-button" title={'Let me pitch you this startup idea...'}>
          <RedditIcon size={42} round />
        </RedditShareButton>
        <LinkedinShareButton url={"http://thisthatapp.surge.sh"} className="share-button" title={'Let me pitch you this startup idea...'}>
          <LinkedinIcon size={42} round />
        </LinkedinShareButton>
        </div>
        </Grid.Column>
        <Grid.Column floated="right" padded='vertically'>
        <Image src="https://i.redd.it/cysuznbvc0py.png" id="giant-head" floated='right' stretched/>
        </Grid.Column>
        </Grid.Row>
        </Grid>
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
