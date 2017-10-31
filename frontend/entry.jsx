
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { signup, login, logout } from './actions/session_actions';
// import {  }
// import { fetchBusinesses, fetchBusiness } from './actions/business_actions';
import {fetchReviews, fetchReview, createReview, updateReview, deleteReview} from './actions/review_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
      store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.fetchBusinesses = fetchBusinesses;
  // window.fetchBusiness = fetchBusiness;
  window.fetchReviews = fetchReviews;
  window.fetchReview = fetchReview;
  window.createReview = createReview;
  window.updateReview = updateReview;
  window.deleteReview = deleteReview;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
