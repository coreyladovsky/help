
import { connect } from 'react-redux';
import { logout, nextPage, clearPage } from '../../actions/session_actions';
import Landing from './landing';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    intendedPage: state.intendedPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    nextPage: (page) => dispatch(nextPage(page)),
    clearPage: () => dispatch(clearPage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
