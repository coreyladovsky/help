import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_REVIEWERS } from '../actions/business_actions'; 
import merge from 'lodash/merge';

const UserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_REVIEWERS:
      return action.reviewers;
    case RECEIVE_USER:
      return merge ({}, oldState, {[action.user.id]: action.user});
    default:
      return oldState;
  }
};

export default UserReducer;
