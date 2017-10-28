import { NEXT_PAGE, CLEAR_PAGE } from '../actions/session_actions';

const PageReducer = (oldState = null, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case NEXT_PAGE:
      return action.page;
    case CLEAR_PAGE:
      return null;
    default:
      return oldState;
  }
};

export default PageReducer;
