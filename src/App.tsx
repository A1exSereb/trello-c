import React from 'react';
import './App.css';
import Authorization from './components/modal/ModalAuthorization';
import Board from './components/board/Board';
import { data, records, comments } from './data/data';
import { dataTypes } from './data/data-types';

if (!localStorage.getItem('records')) localStorage.setItem('records', JSON.stringify(records));

if (!localStorage.getItem('data')) localStorage.setItem('data', JSON.stringify(data));

if (!localStorage.getItem('comments')) localStorage.setItem('comments', JSON.stringify(comments));

function App(): JSX.Element {
  const boards = JSON.parse(localStorage.getItem('data') || '').map((item: dataTypes) => {
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
