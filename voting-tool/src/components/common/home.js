import React from 'react';

import Button from '@material-ui/core/Button';

const Home = () => {

  const openVote = () => window.location.href = '/#/vote';

  return (
    <div>
      <div>
        Home Page
      </div>
        <Button variant="contained" color="primary" onClick={openVote}>Vote</Button>
    </div>
  );
};

export default Home;
