import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';
import SessionReducer from '../reducers/session_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(logger,thunk))
);

export default configureStore;
