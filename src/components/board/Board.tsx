/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import BoardItem from './BoardItem';
import InputForm from '../forms/InputForm';
import Title from './BoardTitle';
import styled from 'styled-components';
import { setNewRecord, boardRecord } from '../../utils/ServiceWorker';
import { RecordType } from '../../data/data-types';

interface BoardProps {
  id: number;
  title: string;
}

export default function NewBoard({ id, title }: BoardProps): JSX.Element {
  const [boardTitle] = useState(title);
  const [boardRecords, setBoardRecords] = useState(boardRecord(id));
  const [showAddModal, setShowAddModal] = useState(false);
  const [newInputValue, setNewInputValue] = useState('');

  useEffect(() => {
    console.log('componentDidUpdate');
    if (newInputValue !== '') {
      setNewRecord(id, newInputValue, setBoardRecords, boardRecords);
      setNewInputValue('');
    }
  }, [boardRecords, id, newInputValue, showAddModal]);

  const boardItems = boardRecords.map((item) => {
    return (
      <BoardItem
        key={Math.random()}
        id={item.id}
        label={item.label}
        boardTitle={boardTitle}
        author={item.author}
        dataId={item.dataId}
        description={item.description}
        setBoardRecords={setBoardRecords}
        boardRecords={boardRecords}
      />
    );
  });

  return (
    <Board className="board" key={id}>
      <Title key={id} title={boardTitle} id={id} />
      <Ul className="board__list">{boardItems}</Ul>
      {showAddModal ? (
        <InputForm
          setNewInputValue={setNewInputValue}
          show={true}
          setParentShowState={setShowAddModal}
        />
      ) : (
        <AddItem onClick={() => setShowAddModal(true)}>Add</AddItem>
      )}
    </Board>
  );
}

// styles

const Board = styled.div`
  width: 200px;
  padding: 10px;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 10px;
  border-radius: 10px;
  border: 3px solid black;
  align-items: left;
  margin-right: 15px;
  background: linear-gradient(to top left, powderblue, pink);
`;
const Ul = styled.ul`
  padding: 0;
`;
const AddItem = styled.button`
  border: none;
  display: block;
  text-align: center;
  background-color: inherit;
  cursor: pointer;
  color: #000;
  width: 100%;
  height: 40px;
  :hover {
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #450045;
    color: #fff;
  }
`;
