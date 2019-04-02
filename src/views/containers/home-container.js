import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authActions } from '../../state/ducks/auth';

class HomeContainer extends Component {
  render() {
    return <div>Hello</div>;
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
  };
};

const mapActionsToProps = {
  logIn: authActions.logIn,
};

export default HomeContainer;
