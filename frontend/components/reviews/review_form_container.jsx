import { connect } from 'react-redux';
import { clearErrors, clearPage } from '../../actions/session_actions';
import { createReview, updateReview, fetchReview } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
  if(ownProps.match.path === "/businesses/:businessId/reviews/new"){
    let review = {rating: null, body: "", price_range: null, noise_level: null,
    delivery: null, business_id: ownProps.match.params.businessId,
    user_id: state.session.currentUser.id};
    return {
      formType: "new",
      review,
      errors: state.errors.session
    };
  } else {
    return {
      formType: "edit",
      review: state.reviews[ownProps.match.params.reviewId]
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if(ownProps.match.path === "/businesses/:businessId/reviews/new"){


    return {
      createReview: (review) => dispatch(createReview(review)),
      clearErrors: () => dispatch(clearErrors()),
      clearPage: () => dispatch(clearPage())

  };

  } else {
    return {
      fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
      updateReview: (review) => dispatch(updateReview(review)),
      clearErrors: () => dispatch(clearErrors()),
      clearPage: () => dispatch(clearPage())
    };
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
