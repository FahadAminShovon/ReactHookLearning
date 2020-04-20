import React from 'react';
import './App.css';
import CounterOne from './components/UseCounter/CounterOne';
import CounterTwo from './components/UseCounter/CounterTwo';

function App () {
  
  return (
      <div className="App">
        <CounterOne/>
        <CounterTwo/>
      </div>
  );
}

export default App;
