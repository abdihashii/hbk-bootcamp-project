import {
  EDIT_VOTER_ACTION,
  UPDATE_ACTION_DONE,
} from '../actions/voterRegistration';

const editVoterIdReducer = (editVoterId = -1, action) => {
  switch (action.type) {
    case EDIT_VOTER_ACTION:
      return action.payload.voterId;
    case UPDATE_ACTION_DONE:
      return -1;
    default:
      return editVoterId;
  }
};

export default editVoterIdReducer;
