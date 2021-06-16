import React from 'react';
import './App.css';
import Authorization from './components/modal/content/ModalAuthorization';
import Modal from './components/modal';
import Board from './components/board';
import { data, records, comments } from './data/data';
import { newId } from './utils/ServiceWorker';
import { DataType } from './data/data-types';

if (!localStorage.getItem('records')) localStorage.setItem('records', JSON.stringify(records));

if (!localStorage.getItem('data')) localStorage.setItem('data', JSON.stringify(data));

if (!localStorage.getItem('comments')) localStorage.setItem('comments', JSON.stringify(comments));

function App(): JSX.Element {
  const boards = JSON.parse(localStorage.getItem('data') || '').map((item: DataType) => {
    return <Board key={newId()} id={item.id} title={item.title} />;
  });

  return (
    <div className="App">
      {localStorage.getItem('name') !== null ? null : (
        <Modal active={true} allowClose={false} content={<Authorization />} />
      )}
      {boards}
    </div>
  );
}

export default App;
