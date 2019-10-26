import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AppNavbar from '../components/AppNavBar/AppNavbar';
import { Container } from 'reactstrap';
import Footer from '../components/Footer';
import SignIn from '../components/SignIn';
import Home from '../components/Home';
import "./App.css";
import Tournaments from "../components/Tournaments";
// import Bracket from "../components/Bracket/Bracket";

class App extends Component {
  //use lifecycle method to see if user is signed in
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">

        <AppNavbar />
          <Container>
            <BrowserRouter>
              <div>
                {/* LANDNG PAGE TELL YOU TO SIGN IN */}
                <Route exact path="/" component={SignIn} />

                {/* PAGE YOU GET ONCE YOU SIGN IN */}
                <Route exact path="/home" component={Home} />

                {/* BRACKET ROUTE */}
                {/* <Route exact path="/bracket" component={Bracket} />  */}

              </div>
            </BrowserRouter>
            <Tournaments></Tournaments>
          </Container>
        <Footer />

      </div>
    );
  }
}

export default connect(null, actions) (App);
