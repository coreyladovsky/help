import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionErrorsReducer = (oldState =[], action) => {
  switch(action.type) {
      case RECEIVE_CURRENT_USER:
        return null;
      case RECEIVE_ERRORS:
        return action.errors;
      default:
        return oldState;
    }
};
