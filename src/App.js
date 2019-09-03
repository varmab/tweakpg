import React from 'react';
import './App.css';
import Signup from './Signup'
import Tweaks from './Tweaks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tweak Playground</h1>
      </header>
      <Signup/>
      <Tweaks/>
    </div>
  );
}

export default App;
