import React from 'react';

const Ballot = ({elections}) => {

  return (
    <>
      <div>Ballot</div>
      <div>
        <p>Q1:</p>
        <p>{elections[0].questions[0]}</p>
        <input type="checkbox"></input>
        <p>Q2:</p>
        <p>{elections[0].questions[1]}</p>
        <input type="checkbox"></input>
        <p>Q3:</p>
        <p>{elections[0].questions[2]}</p>
        <input type="checkbox"></input>
      </div>
    </>
  );

};

export default Ballot;