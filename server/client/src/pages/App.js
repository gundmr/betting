import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AppNavbar from '../components/AppNavBar/AppNavbar';
import { Container } from 'reactstrap';
import Footer from '../components/Footer';
import SignIn from '../components/SignIn';
import Home from '../pages/Home';
import Bracket from '../pages/Bracket';

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
          <Container>
            <div>
              <Route exact path="/" component={SignIn} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/home/:tournament" component={Bracket} />
            </div>
          </Container>
          <Footer />

        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
