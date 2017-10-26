import merge from 'lodash';
import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from '../actions/business_actions';

const BusinessReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      return merge({}, oldState, action.business.id);
    default:
      return oldState;
  }
};

export default BusinessReducer; 
