import React from 'react';
import logo from './logo.svg';
import './App.css';
import Authorization from './components/Authorization';
import {Desk} from './components/Desk';

function App() {
  return (
    <div className="App">
      <Authorization/>
      <Desk/>
    </div>
  );
}

export default App;
