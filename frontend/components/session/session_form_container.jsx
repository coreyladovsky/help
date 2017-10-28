import { connect } from 'react-redux';
import { login, signup, clearErrors, clearPage } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  let formType;
  if(ownProps.location.pathname === '/login') {
    formType = '/login';
  } else {
    formType = '/signup';
  }

  return {
    loggedIn: Boolean(state.session.email),
    errors: state.errors.session,
    intendedPage: state.intendedPage,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if(ownProps.location.pathname === '/login') {
    return {
      processForm: (user) => dispatch(login(user)),
      login: (user) => dispatch(login(user)),
      clearErrors: () => dispatch(clearErrors()),
      clearPage: () => dispatch(clearPage())
    };
  } else {
    return {
      processForm: (user) => dispatch(signup(user)),
      login: (user) => dispatch(login(user)),
      clearErrors: () => dispatch(clearErrors()),
      clearPage: () => dispatch(clearPage())
    };
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
