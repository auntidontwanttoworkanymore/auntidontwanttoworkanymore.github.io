import React, { useEffect } from 'react';
import './App.css';
import { initGA, logPageView } from './analytics'

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src="阿姨.jpg" className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
