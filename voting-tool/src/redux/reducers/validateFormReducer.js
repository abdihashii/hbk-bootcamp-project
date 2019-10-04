import { 
  VALIDATE_ACTION_DONE
} from '../actions/validateFormActions';

const validateFormReducer = (state = false, action) => {
  switch(action.type) {
    case VALIDATE_ACTION_DONE:
      return action.payload.valid;
    default:
      return state;
  };
};

export default validateFormReducer;