import React from 'react';
import { connect } from 'react-redux';
import { fetchBusiness, fetchBusinesses, fetchReviewers } from '../../actions/business_actions';
import { logout, clearPage, nextPage } from '../../actions/session_actions';
import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => {
  let business = state.business[ownProps.match.params.businessId];
  return {
    business,
    currentUser: state.session.currentUser,
    intendedPage: state.intendedPage,
    reviewers: state.reviewers
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    logout: ()=> dispatch(logout()),
    clearPage: () => dispatch(clearPage()),
    nextPage: (page) => dispatch(nextPage(page)),
    fetchReviewers: (businessId) => dispatch(fetchReviewers(businessId)),
    fetchBusinesses: (filters) => dispatch(fetchBusinesses(filters)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
