import { RECEIVE_USER } from '../actions/user_actions';

const UserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USER:
      return {user: action.currentUser};
    default:
      return oldState;
  }
};

export default UserReducer;
