import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import BusinessReducer from './business_reducer';
import PageReducer from './page_reducer';
import ReviewReducer from './review_reducer';
import UserReducer from './user_reducer';
import PhotoReducer from './photo_reducer';
import FilterReducer from './filter_reducer';

const RootReducer = combineReducers({
    session: SessionReducer,
    errors: ErrorsReducer,
    business: BusinessReducer,
    intendedPage: PageReducer,
    reviews: ReviewReducer,
    reviewers: UserReducer,
    photos: PhotoReducer,
    filters: FilterReducer,
});

export default RootReducer;
