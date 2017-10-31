import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReview } from '../../actions/review_actions';
import { logout, clearPage, nextPage } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    reviews: state.reviews,
    businessId: ownProps.businessId,
    currentUser: state.session.currentUser,
    intendedPage: state.intendedPage,
    users: state.users
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    logout: ()=> dispatch(logout()),
    clearPage: () => dispatch(clearPage()),
    nextPage: (page) => dispatch(nextPage(page)),
    fetchUser: (userId) => dispatch(fetchUser(userId))

  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
