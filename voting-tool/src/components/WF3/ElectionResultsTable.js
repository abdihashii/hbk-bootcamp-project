import React from 'react';


export const ElectionResultsTable = ({ election }) => {

	return <>
		<h2>Results of </h2>
		<table>
			<thead>
				<tr>
					<th>Question</th>
					<th>Yes</th>
					<th>No</th>
					<th>Total Votes</th>
				</tr>
			</thead>
			<tbody>
				{/* {election.map(election => <ElectionTableRow election={election} key={election.id} />)} */}
			</tbody>
		</table>



	</>
};
