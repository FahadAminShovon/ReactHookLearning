import React, { useReducer } from 'react';
import './App.css';
import ComponentA from './components/UseReducerWithUseContext/ComponentA';
import ComponentB from './components/UseReducerWithUseContext/ComponentB';
import ComponentC from './components/UseReducerWithUseContext/ComponentC';

const initialState = 0
const reducer = (state , action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state -1
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const CountContext = React.createContext()

function App () {

  const [count, dispatch] = useReducer(reducer, initialState)
  
  return (
    <CountContext.Provider value = {{countState:count, countDispatch:dispatch }}>
      <div className="App">
        Count - {count}
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </div>
    </CountContext.Provider>
  );
}

export default App;
