import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Front_header/Navigator.js'
import Maincontainer from './components/Main_container/Maincontainer.js'
import Maincontainer2 from './components/Main_container2/Maincontainer2.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav/>
      <Maincontainer/>
      <Maincontainer2/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
    
  );
}

export default App;
