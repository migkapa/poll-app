import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return <div>Dashboard</div>;
  }
}

function mapStateToProps(state) {
  const { authedUser, polls, users } = state;
  return {};
}

export default connect()(Dashboard);
