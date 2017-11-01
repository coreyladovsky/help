import { connect } from 'react-redux';
import { clearErrors, clearPage } from '../../actions/session_actions';
import { createReview, updateReview, fetchReview } from '../../actions/review_actions';
// import
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
  debugger
  if(ownProps.match.path === "/businesses/:businessId/reviews/new"){
    let review = {rating: 0, body: "", price_range: 0, noise_level: 0,
    delivery: false};
    return {

    };


  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
