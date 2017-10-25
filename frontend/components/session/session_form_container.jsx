import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router';


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
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if(ownProps.location.pathname === '/login') {
    return {
      processForm: (user) => dispatch(login(user))
    };
  } else {
    return {
      processForm: (user) => dispatch(signup(user))
    };
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
