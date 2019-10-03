import { combineReducers } from 'redux';
import voterRegistration from './reducers/voterRegistration';

const rootReducer = combineReducers({
  voters: voterRegistration,
});

export default rootReducer;
