import { connect } from 'react-redux';
import { logoin, signup } from '../../actions/session_actions';
import SessionForm from './session_form_container';


const mapStateToProps = (state, ownProps) => {
  let formType;
  if(ownProps.location.pathname === '/login') {
    formType = 'login';
  } else {
    formType = 'signup';
  }
  return {
    loggedIn: Boolean(state.session.email),
    errors: state.errors.session,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
if(ownProps.location.pathname === '/login') {
  action = 'login';
} else {
  action = 'signup';
}
return{
  processForm: (user) => dispatch(action(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
