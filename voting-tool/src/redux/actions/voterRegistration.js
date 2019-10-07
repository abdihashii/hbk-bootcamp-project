/* --------------------     Actions     -------------------- */
export const REFRESH_ACTION_REQUEST = 'registration/REFRESH_ACTION_REQUEST';
export const REFRESH_ACTION_DONE = 'registration/REFRESH_ACTION_DONE';
export const CREATE_ACTION_REQUEST = 'registration/CREATE_ACTION_REQUEST';
export const CREATE_ACTION_DONE = 'registration/CREATE_ACTION_DONE';
export const UPDATE_ACTION_REQUEST = 'registration/UPDATE_ACTION_REQUEST';
export const UPDATE_ACTION_DONE = 'registration/UPDATE_ACTION_DONE';
export const DELETE_ACTION_REQUEST = 'registration/DELETE_ACTION_REQUEST';
export const DELETE_ACTION_DONE = 'registration/DELETE_ACTION_DONE';
export const DELETE_MULTIPLE_ACTION_REQUEST = 'registration/DELETE_MULTIPLE_ACTION_REQUEST';
export const DELETE_MULTIPLE_ACTION_DONE = 'registration/DELETE_MULTIPLE_ACTION_DONE';
export const SORT_ASC_ACTION = 'registration/SORT_ASC_ACTION';
export const EDIT_VOTER_ACTION = 'registration/EDIT_VOTER_ACTION';

/* --------------------     Action Creators     -------------------- */
export const refreshActionRequest = () => ({ type: REFRESH_ACTION_REQUEST });
export const refreshActionDone = voters => ({ type: REFRESH_ACTION_DONE, payload: { voters } });

export const createActionRequest = voter => ({ type: CREATE_ACTION_REQUEST, payload: { voter } });
export const createActionDone = voter => ({ type: CREATE_ACTION_DONE, payload: { voter } });

export const updateActionRequest = voter => ({ type: UPDATE_ACTION_REQUEST, payload: { voter } });
export const updateActionDone = voter => ({ type: UPDATE_ACTION_DONE, payload: { voter } });

export const deleteActionRequest = id => ({ type: DELETE_ACTION_REQUEST, payload: { id } });
export const deleteActionDone = id => ({ type: DELETE_ACTION_DONE, payload: { id } });

export const deleteMultipleActionRequest = removeIds => ({ type: DELETE_MULTIPLE_ACTION_REQUEST, payload: { removeIds } });
export const deleteMultipleActionDone = removeIds => ({ type: DELETE_MULTIPLE_ACTION_DONE, payload: { removeIds } });

export const sortAscAction = keyName => ({ type: SORT_ASC_ACTION, payload: { keyName } });

export const editVoterIdAction = voterId => ({ type: EDIT_VOTER_ACTION, payload: { voterId } });

/* --------------------     Thunks     -------------------- */
const VOTER_URL = 'http://localhost:3010/voters';
const headers = { 'Content-Type': 'application/json' };

export const refreshVoters = () => {
  return dispatch => {
    dispatch(refreshActionRequest());
    return fetch(VOTER_URL)
      .then(res => res.json())
      .then(voters => dispatch(refreshActionDone(voters)));
  };
};

export const createVoter = voter => {
  return dispatch => {
    dispatch(createActionRequest(voter));
    return fetch(VOTER_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(voter)
    })
      .then(res => res.json())
      .then(v => dispatch(createActionDone(v)))
      .then(() => dispatch(refreshVoters()));
  };
};

export const updateVoter = voter => {
  return dispatch => {
    dispatch(updateActionRequest(voter));
    return fetch(`${VOTER_URL}/${encodeURIComponent(voter.id)}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(voter),
    })
      .then(res => res.json())
      .then(() => dispatch(updateActionDone(voter)))
      .then(() => dispatch(refreshVoters()));
  };
};

export const deleteVoter = id => {
  return dispatch => {
    dispatch(deleteActionRequest(id));
    return fetch(`${VOTER_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(() => dispatch(deleteActionDone(id)))
      .then(() => dispatch(refreshVoters()));
  };
};

export const deleteMultipleVoters = removeIds => {
  return dispatch => {
    dispatch(deleteMultipleActionRequest(removeIds));
    const promises = removeIds.map((id) => fetch(`${VOTER_URL}/${id}`, { method: 'DELETE' }));
    return Promise.all(promises)
      .then(() => dispatch(refreshVoters()));
  };
};
