import React from 'react';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <>
      <Routes />
      <ul>
        <li><a href="/#/">home</a></li>
        <li><a href="/#/register">register</a></li>
        <li><a href="/#/vote">vote</a></li>
        <li><a href="/#/ballot">ballot</a></li>
        <li><a href="/#/create-election">create-election</a></li>
      </ul>
    </>
  );
}

export default App;
