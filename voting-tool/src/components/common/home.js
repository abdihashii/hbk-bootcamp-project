import React from 'react';

const Home = () => {

  const openVote = () => window.location.href = '/#/vote';

  return (
    <div>
      <div>
        Home Page
      </div>
        <button type="button" onClick={openVote}>Vote</button>
    </div>
  );
};

export default Home;
