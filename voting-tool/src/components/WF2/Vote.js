import React from 'react';

const Vote = () => {

  const beginBallot = () => {

    window.location.href = '/#/vote/ballot';
    
  };

  return (
    <div>
      <div>Voting Page</div>
      <div>
        <form>
          <label htmlFor="voter-valid-input">Identifying Information</label>
          <div>
            <input type="number" id="voter-valid-input" name="voterId" />
          </div>
          <div>
            <button type="button" onClick={beginBallot}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Vote;
