import React from 'react';


export const ElectionResultsTable = ({ election }) => {

	let questions = election.questions;

	console.log(questions);
	return <>
		<h2>Results of {election.name}</h2>
		<table className="electionTable">
			<thead>
				<tr>
					<th>Question</th>
					<th>Yes</th>
					<th>No</th>
					<th>Total Votes</th>
				</tr>
			</thead>
			<tbody>
				{questions.map(question => <ElectionResultsRow key={question.id} question={question.text} total={election.voterIds.length} yesCount={question.yesCount} />)}
			</tbody>
		</table>
	</>
};

const ElectionResultsRow = ({ question, yesCount, total }) => {
	return <tr>
		<td>{question}</td>
		<td>{yesCount}</td>
		<td>{total - yesCount}</td>
		<td>{total}</td>
	</tr>
}