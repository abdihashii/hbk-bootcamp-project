import React from 'react';
import { ElectionTableRow } from './ElectionTableRow';
// import PropTypes from 'prop-types';


export const CreateElection = (props) => {

  console.log(props);


  // change = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.type === 'number'
  //       ? Number(e.target.value)
  //       : e.target.value,
  //   });
  // }
  // value = { this.state.model } onChange = { this.change }

  return <>
    <h1>Manage Elections</h1>
    <h2>Create A New Election</h2>

    <div>
      <label htmlFor="name-input">Election Name: </label>
      <input type="text" id="name-input" name="model"
      />
    </div>


    <h3>Add Question</h3>
    <button type='button'>Add New Question</button>

    <button>submit</button>

    <h2>View Available Elections</h2>
    <table>
      <thead>
        <tr>
          <th>Election Name</th>
          <th>Results</th>
        </tr>
      </thead>
      <tbody>
        <ElectionTableRow />
      </tbody>
    </table>


  </>
};


// CreateElection.propTypes = {

// }