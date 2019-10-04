import React from 'react';
import teamPhotoUrl from '../../teamPhoto.jpg';

const SideBar = ({ style: containerStyles }) => (
  <div style={containerStyles}>
    <ul style={{margin: 0}}>
      <li><a href="/#/">home</a></li>
      <li><a href="/#/register">register</a></li>
      <li><a href="/#/vote">vote</a></li>
      <li><a href="/#/vote/ballot">ballot</a></li>
      <li><a href="/#/create-election">create-election</a></li>
    </ul>
    <img src={teamPhotoUrl} alt="the team" style={{ width: '8rem', margin: '1rem' }} />
  </div>
);

export default SideBar;
