import React from 'react';

import Button from '@material-ui/core/Button';

const Home = () => {

  const routeToVote = () => window.location.href = '/#/vote';

  return (
    <div>
      <div>
        Home Page
      </div>
        <Button variant="contained" color="primary" onClick={routeToVote}>Vote</Button>
    </div>
  );
};

export default Home;
