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
        <li><a href="/#/create-ballot">create-ballot</a></li>
      </ul>
    </>
  );
}

export default App;
