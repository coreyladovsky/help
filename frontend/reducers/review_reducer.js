import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_BUSINESS } from '../actions/business_actions';
import merge from 'lodash/merge';

const ReviewReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge({}, oldState, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      let newState = merge({}, oldState);
      delete newState[action.reviewId];
      return newState;
    case RECEIVE_BUSINESS: 
      return action.business.reviews;
    default:
      return oldState;
  }
};

export default ReviewReducer;
