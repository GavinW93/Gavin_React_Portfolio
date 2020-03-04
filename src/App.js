import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Front_header/Navigator.js'
import Maincontainer from './components/Main_container/Maincontainer.js'
import Maincontainer2 from './components/Main_container2/Maincontainer2.js'
import Maincontainer3 from './components/Main_container3/Maincontainer3.js'
import Form from './components/form/Form.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav/>
      
       
        
      </header>
      <body>
      <Maincontainer/>
      <Maincontainer2/>
      <Maincontainer3/>
      <Form/>
      {/* <Form/> */}
      
      </body>
      
    </div>
    
  );
}

export default App;
