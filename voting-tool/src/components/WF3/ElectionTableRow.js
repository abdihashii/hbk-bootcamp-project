import React from 'react'

export const ElectionTableRow = ({ election, showResults }) => {

	return <tr>
		<td>{election.name}</td>
		<td>{election.voterIds.length}</td>
		<td><button type="button" onClick={() => showResults(election.id)}>View Results</button></td>
	</tr>
}