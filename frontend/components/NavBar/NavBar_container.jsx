import { connect } from 'react-redux';
import NavBar from './NavBar';
import { logout, clearPage, nextPage } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  return({
      currentUser: state.session.currentUser,
      intendedPage: state.intendedPage
    });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    logout: ()=> dispatch(logout()),
    clearPage: () => dispatch(clearPage()),
    nextPage: (page) => dispatch(nextPage(page)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
