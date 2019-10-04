import React from 'react';
import corgiUrl from '../../corgi.jpg';

const corgiStyles = {
  height: 40,
};
const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#E39B48',
  paddingLeft: 15,
  paddingRight: 15,
  fontWeight: 'bold',
};

const Header = () => (
  <div style={containerStyles}>
    <span>Team: HBK</span>
    <span>Slogan: "Vote for Corgis!"</span>
    <img src={corgiUrl} alt="Corgi Team Mascot" style={corgiStyles} />
  </div>
);

export default Header;
