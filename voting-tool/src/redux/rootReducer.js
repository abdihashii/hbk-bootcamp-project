import { combineReducers } from 'redux';
import voterRegistration from './reducers/voterRegistration';
import createElectionRedux from './createElectionRedux'
import currentElection from './reducers/currentElectionReducer';
import currentVoter from './reducers/currentVoterReducer';
import isValidVoter from './reducers/validateFormReducer';

const rootReducer = combineReducers({
  voters: voterRegistration,
  elections: createElectionRedux,
  currentElection, currentVoter,
  isValidVoter,
});

export default rootReducer;
