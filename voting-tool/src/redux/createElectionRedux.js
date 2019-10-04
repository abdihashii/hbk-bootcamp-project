// const initialState = [
// 	{
// 		id: 1,
// 		name: "Corgis",
// 		questions: [{ id: 1, text: "Do you like corgis?", yesCount: 0 }],
// 		voterIds: [1, 2, 3],
// 	},
// ]

//action
export const ADD_ELECTION = 'ADD_ELECTION';
export const ADD_ELECTION_DONE = 'ADD_ELECTION_DONE';
export const GET_ELECTIONS = 'GET_ELECTIONS';
export const GET_ELECTIONS_DONE = 'GET_ELECTIONS_DONE';

//action creator
export const createAddElection = (newElection) => ({ type: ADD_ELECTION, payload: newElection });
export const createAddElectionDone = (newElection) => ({ type: ADD_ELECTION_DONE, payload: newElection });
export const createGetElections = (elections) => ({ type: GET_ELECTIONS, payload: elections });
export const createGetElectionsDone = (elections) => ({ type: GET_ELECTIONS_DONE, payload: elections });


//reducer
const electionsReducer = (state = [], action) => {
	switch (action.type) {
		case GET_ELECTIONS_DONE:
			return action.payload;
		case ADD_ELECTION_DONE:
			return state.concat(action.payload);
		default:
			return state
	}
};

//thunks

export const getElections = () => {
	return dispatch => {
		dispatch(createGetElections());
		return fetch('http://localhost:3010/elections')
			.then(res => res.json())
			// .then(elections => console.log(elections))
			.then(elections => dispatch(createGetElectionsDone(elections)));
	}
}

export const addElection = (newElection) => {
	return dispatch => {
		dispatch(createAddElection(newElection));
		return fetch('http://localhost:3010/elections', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newElection)
		})
			.then(res => res.json())
			.then(election => dispatch(createAddElectionDone(election)));
	}
}

export default electionsReducer;
