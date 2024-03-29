import React, { useState, useEffect } from 'react';
import { ElectionTable } from './ElectionTable';
import { ElectionResultsTable } from './ElectionResultsTable';
// import PropTypes from 'prop-types';

export const CreateElection = ({ elections, addElection, getElections }) => {

  useEffect(() => {
    getElections();
  }, [getElections]);

  //state to track the current election that is being created
  const [electionForm, setElectionForm] = useState({
    id: new Date().getTime(),
    name: "",
    questions: [],
    voterIds: []
  });

  //get values from name input field and add them to the state
  const change = (e) => {
    if (e.target.name === 'name') {
      setElectionForm({
        ...electionForm,
        name: e.target.value
      })
    }
  };

  //get values from question input fields and add them to the state
  const changeQuestion = (id, e) => {
    let newFormQuestions = electionForm.questions;
    let toChangeIndex = newFormQuestions.findIndex((obj => obj.id === id));
    newFormQuestions[toChangeIndex].text = e.target.value;
    setElectionForm({
      ...electionForm,
      questions: newFormQuestions
    })
  }

  //add a new question field in the state
  const addNewQuestionField = () => {
    let currentFormData = electionForm;
    let questionIndex = currentFormData.questions.length + 1;
    setElectionForm({
      ...electionForm,
      questions: electionForm.questions.concat({
        id: questionIndex,
        text: "",
        yesCount: 0
      }),
    });
  }

  //state to track which election results to show
  const [electionToShow, setElectionToShow] = useState({});
  const [showResultTable, setShowReusltTable] = useState(false);

  //store election results to show
  const showResults = (id) => {
    let newElection = elections.filter(x => x.id === id);
    setElectionToShow(newElection[0]);
    setShowReusltTable(true);
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

    <form>
      {electionForm.questions.map(question =>
        <div key={question.id}>
          <label htmlFor="question-input">Question {question.id}: </label>
          <input type="text" id="question-input" name="question" key={question.id} value={electionForm.question} onChange={(e) => changeQuestion(question.id, e)} />
        </div>
      )}
      <p><button type='button' onClick={addNewQuestionField}>Add New Question</button></p>
      <p><button type="button" onClick={() => addElection(electionForm)}>Submit Election</button></p>
    </form>

    <ElectionTable elections={elections} showResults={showResults} />

    {showResultTable && <ElectionResultsTable election={electionToShow} />}

  </>
};

// CreateElection.propTypes = {
// }