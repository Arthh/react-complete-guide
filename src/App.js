import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Arthur'},
      {name: 'joao'},
      {name: 'max'},
    ]
  })

  const switchHandlerName = () => {
    setPersonState({
      persons: [
        {name: 'Lucao'},
        {name: 'joao'},
        {name: 'max'},
      ]
    });
  }

    return (
      <div className="App">
        <button onClick={switchHandlerName}>Troca o nome aqui</button>
        <Person name={personState.persons[0].name}> Alolaloaloalo </Person>
      </div> 
    );
  }


export default App;
