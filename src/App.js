import React from 'react';
import './App.css';
import ComponentC from './components/Context/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value = {"Fahad"}>
        <ChannelContext.Provider value = {"Codevolution"}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
