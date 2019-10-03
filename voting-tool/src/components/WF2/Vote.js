import React from 'react';

import { Button, Input } from '@material-ui/core';

const Vote = () => {

  const routeToBallot = () => {window.location.href = '/#/vote/ballot';};

  return (
    <div>
      <div>Voting Page</div>
      <div>
        <form>
          <label htmlFor="voter-valid-input">Identifying Information</label>
          <div>
            <Input type="number" id="voter-valid-input" name="voterId" autoFocus={true} />
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={routeToBallot}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Vote;
