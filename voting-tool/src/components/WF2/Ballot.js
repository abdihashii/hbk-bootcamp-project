import React, { useState } from 'react';

import { Checkbox, Button } from '@material-ui/core';

const Ballot = ({currentElection}) => {

  const [ isChecked, setChecked ] = useState({});

  const onToggleChecked = (questionId) => {
    if (isChecked[questionId] === false) {
      console.log(`Question ${questionId} is checked`);
    } else if (isChecked[questionId] === true) {
      console.log(`Question ${questionId} is un-checked`);
    }
    setChecked({
      ...isChecked,
      [questionId]: !isChecked[questionId]
    })
  };

  return (
    <>
      <h2>Ballot</h2>
      <div>
        <form>

          {currentElection.questions.map((question) => {
            return (
              <div key={question.id}>
                <p>Q{question.id}</p>
                <p>{question.text}</p>
                <Checkbox checked={isChecked[question.id] || false} type="checkbox" name={`question-${question.id}`} color="secondary" onChange={() => onToggleChecked(question.id)}></Checkbox>
              </div>
            );
          })}

          <div>
            <Button variant="contained" color="primary">Cast Vote</Button>
          </div>
        </form>
      </div>
    </>
  );

};

export default Ballot;