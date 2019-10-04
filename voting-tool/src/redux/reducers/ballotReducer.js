import { 
  CREATE_ACTION_DONE
} from '../actions/ballotActions';

const ballotReducer = (state = {}, action) => {
  switch(action.type) {
    case CREATE_ACTION_DONE:
      return action.payload;
    default:
      return state;
  };
};

export default ballotReducer;