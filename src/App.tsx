import React from 'react';
import './App.css';
import Authorization from './components/AuthorizationHooks';
import Board from './components/Board';
import {data} from './data/data'


function App() {

  const boards = data.map((item:any )=>{return (
                <Board
                key={Math.random()}
                id={item.id}
                title={item.title}
                />)
        })

  return (
    <div className="App">
      {localStorage.getItem('name') !== null?null:<Authorization/>}
      {boards}
    </div>
  );
}

export default App;
