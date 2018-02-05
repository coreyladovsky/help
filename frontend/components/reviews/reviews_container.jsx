import { connect } from "react-redux";
import ReviewIndex from "./review_index";
import { fetchReview } from "../../actions/review_actions";
import { logout, clearPage, nextPage } from "../../actions/session_actions";
import { fetchUser } from "../../actions/user_actions";
import { fetchReviewers } from "../../actions/business_actions";
import { deleteReview } from "../../actions/review_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: Object.values(state.reviews),
    businessId: ownProps.businessId,
    currentUser: state.session.currentUser,
    intendedPage: state.intendedPage,
    reviewers: state.reviewers
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchReviewers: businessId => dispatch(fetchReviewers(businessId)),
    logout: () => dispatch(logout()),
    clearPage: () => dispatch(clearPage()),
    nextPage: page => dispatch(nextPage(page)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
