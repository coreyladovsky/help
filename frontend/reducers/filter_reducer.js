import { FRONT_FILTER, CLEAR_FILTER } from "../actions/filter_actions";
import merge from "lodash/merge";

const FilterReducer = (oldState = null, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case FRONT_FILTER:
      return merge({}, oldState, action.bounds);
    case CLEAR_FILTER:
      return {};
    default:
      return oldState;
  }
};

export default FilterReducer;
