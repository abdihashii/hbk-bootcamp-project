import { combineReducers } from 'redux';
import voterRegistration from './reducers/voterRegistration';
import createElectionRedux from './createElectionRedux'
import currentElection from './reducers/currentElectionReducer';
import currentVoter from './reducers/currentVoterReducer';
import isValidVoter from './reducers/validateFormReducer';
import editVoterId from './reducers/editVoterRegistrationId';

const rootReducer = combineReducers({
  voters: voterRegistration,
  elections: createElectionRedux,
  currentElection, currentVoter,
  isValidVoter, editVoterId,
});

export default rootReducer;
