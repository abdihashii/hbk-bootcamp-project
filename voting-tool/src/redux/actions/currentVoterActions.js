/* --------------------     Actions     -------------------- */
export const REFRESH_ACTION_REQUEST = 'currentVoter/REFRESH_ACTION_REQUEST';
export const REFRESH_ACTION_DONE = 'currentVoter/REFRESH_ACTION_DONE';

/* --------------------     Action Creators     -------------------- */
export const refreshActionRequest = () => ({ type: REFRESH_ACTION_REQUEST });
export const refreshActionDone = voter => ({ type: REFRESH_ACTION_DONE, payload: { voter } });

/* --------------------     Thunks     -------------------- */
const VOTER_URL = 'http://localhost:3010/voters/';

export const getCurrentVoter = (voterId) => {
  return dispatch => {
    dispatch(refreshActionRequest());
    return fetch(VOTER_URL + encodeURIComponent(voterId))
      .then(res => res.json())
      .then(voter => dispatch(refreshActionDone(voter)));
  };
};