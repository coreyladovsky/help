import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PhotoUpload from './photo_upload';
import { createPhoto } from '../../actions/photo_actions';
import { clearErrors, clearPage, nextPage, logout } from '../../actions/session_actions';



const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    intendedPage: state.intendedPage
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clearPage: () => dispatch(clearPage()),
    logout: ()=> dispatch(logout()),
    nextPage: (page) => dispatch(nextPage(page)),

  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUpload));
