import React, { useState } from 'react';
import { ElectionTable } from './ElectionTable';
import { ElectionResultsTable } from './ElectionResultsTable';
// import PropTypes from 'prop-types';

export const CreateElection = ({ elections, createAddElection }) => {

  //state to track the current election that is being created
  const [electionForm, setElectionForm] = useState({
    id: elections.length + 1,
    name: "",
    questions: []
  });

  //get values in input fields and add them to the state
  const change = (e) => {
    if (e.target.name === 'name') {
      setElectionForm({
        ...electionForm,
        name: e.target.value
      })
    }
    if (e.target.name === 'question') {
      console.log('update a question at its id')
    }
  };

  //add a new question field in the state
  const addNewQuestionField = () => {
    let currentFormData = electionForm;
    let questionIndex = currentFormData.questions.length + 1;
    setElectionForm({
      ...electionForm,
      questions: electionForm.questions.concat({
        id: questionIndex,
        text: ""
      }),
    });
    // return <>
    //   <label htmlFor="question-input">Question {questionIndex}: </label>
    //   <input type="text" id="question-input" name="question" questionNum={questionIndex} />
    // </>
  }

  let electionToShow;
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
    <p>Yes-or-No Questions</p>

    {electionForm.questions.map(question => <QuestionForm id={question.id} key={question.id} />)}

    <p><button type='button' onClick={addNewQuestionField}>Add New Question</button></p>

    <p><button type="button">Submit Election</button></p>

    <ElectionTable elections={elections} showResults={showResults} />

    <ElectionResultsTable election={electionToShow} />

  </>
};

const QuestionForm = ({ id }) => {
  return <div>
    <label htmlFor="question-input">Question {id}: </label>
    <input type="text" id="question-input" name="question" key={id} /></div>
}


// CreateElection.propTypes = {
// }