import React from 'react';
import './App.css';
import Authorization from './components/Authorization-modal';
import Board from './components/Board';
import { data, records } from './data/data';
import { dataTypes } from './data/data-types';

function App(): JSX.Element {
  localStorage.setItem('records', JSON.stringify(records));
  const boards = data.map((item: dataTypes) => {
    return <Board key={Math.random()} id={item.id} title={item.title} />;
  });

  return (
    <div className="App">
      {localStorage.getItem('name') !== null ? null : <Authorization />}
      {boards}
    </div>
  );
}

export default App;
