import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AppNavbar from '../components/AppNavBar/AppNavbar';
//import { Container } from 'reactstrap';
import Footer from '../components/Footer/Footer';
import SignIn from '../components/SignIn/SignIn';
import Home from './Home/Home';
import Bracket from './Bracket/Bracket';
import Game from './Game';

class App extends Component {
  //use lifecycle method to see if user is signed in
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppNavbar />
          <div>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/tournament/:tournament" component={Bracket} />
            <Route exact path="/tournament/:tournament/:game" component={Game} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
