import React from 'react';
import Routes from './Routes';
import Header from './components/common/header';
import SideBar from './components/common/sideBar';
import './App.css';

const sideBarStyles = {
  backgroundColor: '#FFBED6',
  display: 'relative',
  left: 0,
  top: 0,
  bottom: 0,
  width: '10rem',
  paddingTop: 10,
  paddingBottom: 10,
};
const bodyStyles = {
  display: 'flex',
};
const containerStyles = {
  height: '100%',
};

function App() {
  return (
    <div style={containerStyles}>
      <Header />
      <div style={bodyStyles}>
        <SideBar style={sideBarStyles} />
        <Routes />
      </div>
    </div>
  );
}

export default App;
