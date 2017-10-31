import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';
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
)(ReviewIndex);
