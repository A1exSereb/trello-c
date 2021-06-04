import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Authorization from './components/Authorization';
import {Desk} from './components/Desk';


function App() {
  const [authorized, setAuthorizet] = useState(false)
  if(localStorage.getItem('name') !== null){
    return (
      <div className="App">
        <Desk/>
      </div>
    );
  }else{
    return (
      <div className="App">
        <Authorization/>
        <Desk/>
      </div>
    );
  }
}

export default App;
