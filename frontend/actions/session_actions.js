import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) =>({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const

export const login = (user) => (dispatch) => {
  return SessionApiUtil.login(user).then(
     (u) => dispatch(receiveCurrentUser(u)));
};

export const
