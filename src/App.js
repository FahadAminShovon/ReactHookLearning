import React from 'react';
import './App.css';
import ComponentE from './components/Context/ComponentE';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value = {"Fahad"}>
        <ChannelContext.Provider value = {"Codevolution"}>
          <ComponentE/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
