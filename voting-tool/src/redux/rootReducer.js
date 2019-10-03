import { combineReducers } from 'redux';
import voterRegistration from './reducers/voterRegistration';
import createElectionRedux from './createElectionRedux'
import currentElection from './reducers/currentElectionReducer';
import currentVoter from './reducers/currentVoterReducer';

const rootReducer = combineReducers({
  voters: voterRegistration,
  elections: createElectionRedux,
  currentElection, currentVoter,
});

export default rootReducer;
