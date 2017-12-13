import { connect } from 'react-redux';
import { clearErrors, clearPage, nextPage, logout } from '../../actions/session_actions';
import { createReview, updateReview, fetchReview } from '../../actions/review_actions';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { clearFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {

  if(ownProps.match.path === "/businesses/:businessId/reviews/new"){
    let review = {rating: "", body: "", price_range: "", noise_level: "",
    delivery: "", business_id: ownProps.match.params.businessId,
    user_id: state.session.currentUser.id};

    return {
      formType: "new",
      review,
      errors: state.errors.session,
      business: state.business[ownProps.match.params.businessId],
      currentUser: state.session.currentUser,
      intendedPage: state.intendedPage
    };
  } else {
    return {
      formType: "edit",
      review: state.reviews[ownProps.match.params.reviewId],
      business: state.business[ownProps.match.params.businessId],
      currentUser: state.session.currentUser,
      errors: state.errors.session,
      intendedPage: state.intendedPage
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if(ownProps.match.path === "/businesses/:businessId/reviews/new"){

    return {
      createReview: (review) => dispatch(createReview(review)),
      clearErrors: () => dispatch(clearErrors()),
      clearPage: () => dispatch(clearPage()),
      fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
      logout: ()=> dispatch(logout()),
      nextPage: (page) => dispatch(nextPage(page)),
      fetchBusinesses: (filters) => dispatch(fetchBusinesses(filters)),
      clearFilter: () => dispatch(clearFilter()),
    };
  } else {
    
    return {
      fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
      updateReview: (review) => dispatch(updateReview(review)),
      clearErrors: () => dispatch(clearErrors()),
      clearPage: () => dispatch(clearPage()),
      fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
      logout: ()=> dispatch(logout()),
      nextPage: (page) => dispatch(nextPage(page)),
      fetchBusinesses: (filters) => dispatch(fetchBusinesses(filters)),
      clearFilter: () => dispatch(clearFilter()),
    };
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
