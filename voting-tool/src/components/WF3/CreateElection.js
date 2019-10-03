import React from 'react';
import { ElectionTable } from './ElectionTable';
import { ElectionResultsTable } from './ElectionResultsTable';
import { useForm } from './useForm';

// import PropTypes from 'prop-types';


export const CreateElection = ({ elections, createAddElection, createAddQuestion }) => {

  let electionToShow;

  const [electionForm, change] = useForm({});


  const showResults = (id) => {
    electionToShow = elections.find(x => x.id === id);

    console.log('show election', id);
  }


  return <>
    <h1>Manage Elections</h1>
    <h2>Create A New Election</h2>

    <div>
      <label htmlFor="name-input">Election Name: </label>
      <input type="text" id="name-input" name="name" value={electionForm.name} onChange={change}
      />
    </div>

    <h3>Add New Yes-or-No Question</h3>

    {/* 
    <label htmlFor="question-input">Question 1: </label>
    <input type="text" id="question-input" name="question"
    /> */}

    <p><button type='button' onClick={() => createAddQuestion(elections.length + 1)}>Add New Question</button></p>

    <p><button>Submit Election</button></p>

    <ElectionTable elections={elections} showResults={showResults} />

    <ElectionResultsTable election={electionToShow} />

  </>
};


// CreateElection.propTypes = {

// }