/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import BoardItem from './BoardItem';
import InputForm from '../forms/InputForm';
import Title from './BoardTitle';
import styled from 'styled-components';
import { setNewRecord, thisBoardRecords } from '../../utils/ServiceWorker';

interface BoardProps {
  id: number;
  title: string;
}

export default function Board({ id, title }: BoardProps): JSX.Element {
  const [boardTitle] = useState(title);
  const [boardRecords, setBoardRecords] = useState(thisBoardRecords(id));
  const [showAddModal, setShowAddModal] = useState(false);
  const [newInputValue, setNewInputValue] = useState('');

  useEffect(() => {
    console.log('componentDidUpdate');
    if (newInputValue !== '') {
      setNewRecord(id, newInputValue, setBoardRecords, boardRecords);
      setNewInputValue('');
    }
  }, [showAddModal]);

  const editDescription = (id: number, newValue: string): void => {
    if (newValue !== '') {
      setBoardRecords(
        boardRecords.map((item: any) => ({
          ...item,
          description: item.id === id ? newValue : item.description,
        }))
      );
    }
  };

  const boardItems = boardRecords.map((item: any) => {
    return (
      <BoardItem
        key={Math.random()}
        id={item.id}
        label={item.label}
        author={item.author}
        dataId={item.dataId}
        description={item.description}
        setBoardRecords={setBoardRecords}
        boardRecords={boardRecords}
        editDescription={editDescription}
      />
    );
  });

  return (
    <StyledBoard className="board" key={id}>
      <Title key={id} title={boardTitle} id={id} />
      <StyledUl className="board__list">{boardItems}</StyledUl>
      {showAddModal ? (
        <InputForm
          setNewInputValue={setNewInputValue}
          show={true}
          setParentShowState={setShowAddModal}
        />
      ) : (
        <StyledAddItem onClick={() => setShowAddModal(true)}>Add</StyledAddItem>
      )}
    </StyledBoard>
  );
}

// styles

const StyledBoard = styled.div`
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
const StyledUl = styled.ul`
  padding: 0;
`;
const StyledAddItem = styled.button`
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
