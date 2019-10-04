import React from 'react';
import { ElectionTableRow } from './ElectionTableRow';


export const ElectionTable = ({ elections, showResults }) => {

	return <>
		<h2>View Available Elections</h2>
		<table className="electionTable">
			<thead>
				<tr>
					<th>Election Name</th>
					<th>Total Votes</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{elections.map(election => <ElectionTableRow election={election} showResults={showResults} key={election.id} />)}
			</tbody>
		</table>



	</>
};
