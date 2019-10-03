import { 
  REFRESH_ACTION_REQUEST, REFRESH_ACTION_DONE
} from '../actions/currentElectionActions';

const currentElectionReducer = (state = {}, action) => {
  switch(action.type) {
    case REFRESH_ACTION_REQUEST:
      return action.payload;
    case REFRESH_ACTION_DONE:
      return action.payload;
    default:
      return state;
  };
};

export default currentElectionReducer;