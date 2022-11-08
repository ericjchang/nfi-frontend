import React from 'react';
import './App.css';
import Web3Provider from './Web3Provider';

function App() {
  return (
    <>
      <Web3Provider />
      <div className="App">
        <p>Content</p>
      </div>
    </>
  );
}

export default App;
