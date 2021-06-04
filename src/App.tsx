import React from 'react';
import './App.css';
import styled from 'styled-components';
import Authorization from './components/Authorization';
import Desk from './components/Desk';

const data = [
  {id:1,title:'TODO'},
  {id:2,title:'In Progress'},
  {id:3,title:'Testing'},
  {id:4,title:'Done'},
]

function App() {
  if(localStorage.getItem('name') !== null){
    return (
      <div className="App">
        <Desk 
        data={data}
        />
      </div>
    );
  }else{
    return (
      <div className="App">
        <Authorization/>
        <Desk
        data={data}
        />
      </div>
    );
  }
}

export default App;
