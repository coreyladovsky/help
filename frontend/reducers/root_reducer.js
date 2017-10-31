import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import BusinessReducer from './business_reducer';
import PageReducer from './page_reducer';
import ReviewReducer from './review_reducer';

const RootReducer = combineReducers({
    session: SessionReducer,
    errors: ErrorsReducer,
    business: BusinessReducer,
    intendedPage: PageReducer,
    reviews: ReviewReducer
});

export default RootReducer;
