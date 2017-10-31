import * as UserAPIUtil from '../util/user_api_util';


export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});




export const fetchUser = (userId) => dispatch => (
  UserAPIUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
);
