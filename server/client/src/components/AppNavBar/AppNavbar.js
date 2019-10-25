import React, { Component } from 'react';
import { connect } from 'react-redux';
import BetButton from '../BetButton'

import {
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  Container
} from 'reactstrap';

// import Navbar from 'react-bootstrap/Navbar'; 
// import NavbarBrand from 'react-bootstrap/NavbarBrand'; 

class Navigation extends Component {
  renderContent() {
    switch(this.props.auth){
      case null:
        return;
      case false:
        return (
          <NavLink href="/auth/google">Sign In</NavLink>
        );
      default:
        return(
          <div>
            <NavLink href="/api/logout">Logout</NavLink>
            <BetButton />
          </div>
        );
    }
  }

  render() {
    console.log(this.props);
    return(
      <Navbar color="dark" dark expand="sm" className="mb-5">

        <Container>
          <NavbarBrand href="/">BETS</NavbarBrand>
            <NavItem>
              <NavLink>{this.renderContent()}</NavLink>
            </NavItem>
        </Container>

      </Navbar>
      );
    }
  };

  function mapStateToProps({ auth }){
    return { auth };
  }

export default connect(mapStateToProps) (Navigation);