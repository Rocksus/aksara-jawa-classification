import React from 'react';
import './App.css';
import Sketch from './Sketch';
import Sidebar from './Sidebar';
import Content from './Content';
import ScrollBtn from './ScrollBtn';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Main-page">
        <header className="App-header">
          <h1>Let's Learn Aksara Jawa!</h1>
        </header>
        <Sketch />
        <ScrollBtn />
      </div>
      <Content />
    </div>
  );
}

export default App;
