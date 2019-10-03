/* --------------------     Actions     -------------------- */
export const REFRESH_ACTION_REQUEST = 'currentElection/REFRESH_ACTION_REQUEST';
export const REFRESH_ACTION_DONE = 'currentElection/REFRESH_ACTION_DONE';

/* --------------------     Action Creators     -------------------- */
export const refreshActionRequest = () => ({ type: REFRESH_ACTION_REQUEST });
export const refreshActionDone = election => ({ type: REFRESH_ACTION_DONE, payload: { election } });

/* --------------------     Thunks     -------------------- */
const ELECTION_URL = 'http://localhost:3010/elections/';

export const getCurrentElection = (electionId) => {
  return dispatch => {
    dispatch(refreshActionRequest());
    return fetch(ELECTION_URL + encodeURIComponent(electionId))
      .then(res => res.json())
      .then(election => dispatch(refreshActionDone(election)));
  };
};