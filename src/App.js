import React from 'react';

import './App.css';

import { AppNavBar } from './components/layout/AppNavBar';

import Routes from './routes';
function App() {
  return (
    <div className="App ">
      <AppNavBar />
      <Routes />
    </div>
  );
}

export default App;
