

const initialState = [
	{
		id: 1,
		electionName: "Corgis",
		questions: [{ id: 1, text: "Do you like corgis?", yesCount: 0 }],
		voterIDs: [1, 2, 3],
	},
]

//action
export const ADD_ELECTION = 'ADD_ELECTION';
export const ADD_ELECTION_DONE = 'ADD_ELECTION_DONE';

//action creator
export const createAddElection = (newElection) => ({ type: ADD_ELECTION, payload: newElection });
export const createAddElectionDone = (newElection) => ({ type: ADD_ELECTION_DONE, payload: newElection });


//reducer
const electionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ELECTIONS':
			return action.payload.elections;
		case ADD_ELECTION_DONE:
			return state.concat(action.payload);
		case 'UPDATE_BALLOTS':
			return {
				...state,
				//add your own code here
			}
		default:
			return state
	}
};

//thunks
// export const getElection = () => {
// 	return dispatch => {
// 		dispatch(createAddElection(newElection));
// 		return fetch('http://localhost:3010/elections')
// 			.then(res => res.json())
// 			.then(elections => dispatch(createAddElectionDone(elections)));
// 	}
// }

export const addElection = (newElection) => {
	return dispatch => {
		dispatch(createAddElection(newElection));
		return fetch('http://localhost:3010/elections', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newElection)
		})
			.then(res => res.json())
			.then(election => dispatch(createAddElectionDone(election))
			);
	}
}

export default electionsReducer;
