import { combineReducers } from 'redux';
import voters from './reducers/voterRegistration';

const rootReducer = combineReducers({
  voters,
});

export default rootReducer;
