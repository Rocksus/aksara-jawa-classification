import React from 'react';
import './App.css';
import Sketch from './Sketch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's Learn Aksara Jawa!</h1>
      </header>
      <p className="Sketch-description">try drawing here and then clicking classify!</p>
      <Sketch />
    </div>
  );
}

export default App;
