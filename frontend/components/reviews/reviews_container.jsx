import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index';
import { fetchReviews } from '../../actions/reviews_actions';
import { logout, clearPage, nextPage } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    reviews: state.business.reviewIds,
    currentUser: state.session.currentUser,
    intendedPage: state.intendedPage
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    fetchReviews: () => dispatch(fetchReviews()),
    logout: ()=> dispatch(logout()),
    clearPage: () => dispatch(clearPage()),
    nextPage: (page) => dispatch(nextPage(page))

  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsIndex);
