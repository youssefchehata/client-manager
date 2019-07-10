import React from 'react';

import './App.css';

import AppNavbar from './components/layout/AppNavbar';

import Routes from './routes';
function App() {
  return (
    <div className="App ">
      <AppNavbar />
      <Routes />
    </div>
  );
}

export default App;
