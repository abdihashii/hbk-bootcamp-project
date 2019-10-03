import { combineReducers } from 'redux';
import voterRegistration from './reducers/voterRegistration';
import createElectionRedux from './createElectionRedux'

const rootReducer = combineReducers({
  voters: voterRegistration,
  elections: createElectionRedux,
});

export default rootReducer;
