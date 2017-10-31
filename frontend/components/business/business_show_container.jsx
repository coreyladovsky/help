import React from 'react';
import { connect } from 'react-redux';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions';
import { logout, clearPage, nextPage } from '../../actions/session_actions';
import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => {
  debugger
  let business = state.business[ownProps.match.params.businessId];
  return {
    business,
    currentUser: state.session.currentUser,
    intendedPage: state.intendedPage
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    logout: ()=> dispatch(logout()),
    clearPage: () => dispatch(clearPage()),
    nextPage: (page) => dispatch(nextPage(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
