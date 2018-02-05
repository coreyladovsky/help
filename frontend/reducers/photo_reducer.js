import { RECEIVE_PHOTOS, RECEIVE_PHOTO } from "../actions/photo_actions";
import { RECEIVE_BUSINESS } from "../actions/business_actions";
import merge from "lodash/merge";

const PhotoReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      return merge({}, oldState, { [action.photo.id]: action.photo });
    case RECEIVE_BUSINESS:
      return action.business.photos || {};
    default:
      return oldState;
  }
};

export default PhotoReducer;
