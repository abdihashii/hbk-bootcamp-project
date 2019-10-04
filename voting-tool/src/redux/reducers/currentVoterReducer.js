import { 
  REFRESH_ACTION_DONE
} from '../actions/currentVoterActions';

const currentVoterReducer = (state = {}, action) => {
  switch(action.type) {
    case REFRESH_ACTION_DONE:
      return action.payload;
    default:
      return state;
  };
};

export default currentVoterReducer;