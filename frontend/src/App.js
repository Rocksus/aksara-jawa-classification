import React from 'react';
import './App.css';
import Sketch from './Sketch';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <header className="App-header">
        <h1>Let's Learn Aksara Jawa!</h1>
      </header>
      <Sketch />
    </div>
  );
}

export default App;
