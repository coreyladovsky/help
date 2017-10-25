import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const SessionReducer = (oldState = {currentUser: null}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, action.currentUser);
    default:
      return oldState;
  }
};

export default SessionReducer;
