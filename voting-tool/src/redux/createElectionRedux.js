const initialState = [
	{
		id: 1,
		name: "Corgis",
		questions: [{ id: 1, text: "Do you like corgis?", yesCount: 0 }],
		voterIds: [1, 2, 3],
	},
]

//action
export const ADD_ELECTION = 'ADD_ELECTION';
export const ADD_ELECTION_DONE = 'ADD_ELECTION_DONE';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_DONE = 'ADD_QUESTION_DONE';

//action creator
export const createAddElection = (newElection) => ({ type: ADD_ELECTION, payload: newElection });
export const createAddElectionDone = (newElection) => ({ type: ADD_ELECTION_DONE, payload: newElection });
export const createAddQuestion = (id) => ({ type: ADD_QUESTION, payload: id });
export const createAddQuestionDone = (id) => ({ type: ADD_QUESTION_DONE, payload: { id } });


//reducer
const electionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ELECTIONS':
			return action.payload.elections;
		case ADD_ELECTION_DONE:
			return state.concat(action.payload);
		case ADD_QUESTION_DONE:
			return state
		default:
			return state
	}
};

//thunks

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

// export const addQuestion = (id) => {
// 	return dispatch => {
// 		dispatch(createAddQuestion(id));

// let electionToChange = state.find(x => x.id === action.payload.id);
// let newQuestionId = electionToChange.questions.length + 1;
// electionToChange.questions.concat({ id: newQuestionId, text: "", yesCount: 0 });
// let newState = state.filter(x => x.id === action.payload);

// return newState.concat(electionToChange);


// 		return fetch('http://localhost:3010/elections/' + id, {
// 			method: 'PUT',
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify()
// 		})
// 			.then(res => res.json())
// 			.then(id => dispatch(createAddQuestionDone(id))
// 			);
// 	}
// }

export default electionsReducer;
