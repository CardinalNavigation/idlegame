import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  const [wood, setWood]= useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>Total Wood: {}</h2>
        <button>Chop Wood</button>
      </header>
    </div>
  );
}

export default App;
