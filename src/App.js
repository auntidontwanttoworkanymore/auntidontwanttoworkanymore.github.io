import React from 'react';
import './App.css';
import { initGA, logPageView } from './analytics'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="阿姨.jpg" className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

App.prototype.componentDidMount = function() {
  initGA()
  logPageView()
}

export default App;
