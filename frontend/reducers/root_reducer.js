import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import BusinessReducer from './business_reducer';


const RootReducer = combineReducers({
    session: SessionReducer,
    errors: ErrorsReducer,
    business: BusinessReducer
});

export default RootReducer;
