import {
  REFRESH_ACTION_DONE, CREATE_ACTION_DONE, UPDATE_ACTION_DONE, DELETE_ACTION_DONE,
} from '../actions/voterRegistration';

const registrationReducer = (state = [], action) => {
  switch (action.type) {
    case REFRESH_ACTION_DONE: {
      return action.payload.voters;
    }
    case CREATE_ACTION_DONE: {
      return state.concat(action.payload.voter);
    }
    case UPDATE_ACTION_DONE: {
      const editedIdx = state.findIndex(voter => voter.id === action.payload.voter.id);
      state.splice(editedIdx, 1, action.payload.voter);
      return [...state];
    }
    case DELETE_ACTION_DONE: {
      const removedIdx = state.findIndex(voter => voter.id === action.payload.id);
      state.splice(removedIdx, 1);
      return [...state];
    }
    default:
      return state;
  }
};

export default registrationReducer;
