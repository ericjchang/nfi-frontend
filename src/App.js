import './App.css';
import React from 'react';
import Home from './components/Home';
import Web3Provider from './Web3Provider';

function App() {
  return (
    <>
      <Web3Provider />
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
