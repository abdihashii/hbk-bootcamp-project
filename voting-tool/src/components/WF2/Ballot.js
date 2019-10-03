import React, { useState } from 'react';

import { Checkbox, Button } from '@material-ui/core';

const Ballot = ({currentElection}) => {

  // const [ isChecked, setChecked ] = useState(false);

  const [ isChecked, setChecked ] = useState({});

  const onToggleChecked = (questionId) => {
    setChecked({
      ...isChecked,
      [questionId]: !isChecked[questionId]
    })
  };
  
  // const toggleCheck = index => {
  //   if (isChecked === false) {
  //     console.log(`${index} is checked`);
  //   }
  //   setChecked(!isChecked);
  // };

  // const onToggleCheck = (index) => {
  //   // console.log(`Checked`);
  //   setChecked(isChecked[index] = !isChecked[index]);
  // }
  
  // elections[0].questions.forEach((i) => {
  //   setChecked([...isChecked[i], false])
  // });

  return (
    <>
      <div>Ballot</div>
      <div>
        <form>


          {/* {currentElection.questions.map((key, index) => { */}
          {currentElection.questions.map((question) => {
            return (
              <div key={question.id}>
                {/* {console.log(question.text)} */}
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