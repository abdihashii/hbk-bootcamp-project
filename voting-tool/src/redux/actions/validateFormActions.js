/* --------------------     Actions     -------------------- */
export const VALIDATE_ACTION_REQUEST = 'validate/VALIDATE_ACTION_REQUEST';
export const VALIDATE_ACTION_DONE = 'validate/VALIDATE_ACTION_DONE';

/* --------------------     Action Creators     -------------------- */
export const validateActionRequest = () => ({ type: VALIDATE_ACTION_REQUEST });
export const validateActionDone = valid => ({ type: VALIDATE_ACTION_DONE, payload: { valid } });

/* --------------------     Thunks     -------------------- */
const VOTER_URL = 'http://localhost:3010/voters/';

export const goToSecondForm = (voterId) => {
  return dispatch => {
    dispatch(validateActionRequest());
    return fetch(VOTER_URL + encodeURIComponent(voterId))
    .then(res => res.json())
    .then(voter => {
        console.log(voter.id);
        const isValid = voter.id ? true : false;
        console.log(isValid);
        dispatch(validateActionDone(isValid));
        return isValid;
      });
  };
};
