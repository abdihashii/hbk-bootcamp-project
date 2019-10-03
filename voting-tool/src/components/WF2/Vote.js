import React from 'react';

import Button from '@material-ui/core/Button';

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
            <Button variant="contained" color="primary" onClick={beginBallot}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Vote;
