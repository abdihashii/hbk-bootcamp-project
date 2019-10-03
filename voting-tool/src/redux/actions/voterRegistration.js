/* --------------------     Actions     -------------------- */
export const CREATE_ACTION_REQUEST = 'registration/CREATE_ACTION_REQUEST';
export const CREATE_ACTION_DONE = 'registration/CREATE_ACTION_DONE';
export const UPDATE_ACTION_REQUEST = 'registration/UPDATE_ACTION_REQUEST';
export const UPDATE_ACTION_DONE = 'registration/UPDATE_ACTION_DONE';
export const DELETE_ACTION_REQUEST = 'registration/DELETE_ACTION_REQUEST';
export const DELETE_ACTION_DONE = 'registration/DELETE_ACTION_DONE';
export const DELETE_MULTIPLE_ACTION_REQUEST = 'registration/DELETE_MULTIPLE_ACTION_REQUEST';
export const DELETE_MULTIPLE_ACTION_DONE = 'registration/DELETE_MULTIPLE_ACTION_DONE';

/* --------------------     Action Creators     -------------------- */
export const createActionRequest = voter => ({ type: CREATE_ACTION_REQUEST, payload: { voter } });
export const createActionDone = voter => ({ type: CREATE_ACTION_DONE, payload: { voter } });

export const updateActionRequest = voter => ({ type: UPDATE_ACTION_REQUEST, payload: { voter } });
export const updateActionDone = voter => ({ type: UPDATE_ACTION_DONE, payload: { voter } });

export const deleteActionRequest = id => ({ type: DELETE_ACTION_REQUEST, payload: { id } });
export const deleteActionDone = id => ({ type: DELETE_ACTION_DONE, payload: { id } });

export const deleteMultipleActionRequest = removeIds => ({ type: DELETE_MULTIPLE_ACTION_REQUEST, payload: { removeIds } });
export const deleteMultipleActionDone = removeIds => ({ type: DELETE_MULTIPLE_ACTION_DONE, payload: { removeIds } });

/* --------------------     Thunks     -------------------- */
const VOTER_URL = 'http://localhost:3010/voters';
export const createVoter = voter => {
  return dispatch => {
    dispatch(createActionRequest(voter));
    return fetch(VOTER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(voter)
    })
      .then(res => res.json())
      .then(car => dispatch(createActionDone(car)));
  };
};

export const updateVoter = voter => {
  return dispatch => {
    dispatch(updateActionRequest(voter));
    return fetch(`${VOTER_URL}/${encodeURIComponent(voter.id)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(voter),
    })
      .then(res => res.json())
      .then(() => dispatch(updateActionDone(voter)));
  };
};

export const deleteVoter = id => {
  return dispatch => {
    dispatch(deleteActionRequest(id));
    return fetch(`${VOTER_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(() => dispatch(deleteActionDone(id)));
  };
};