/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import BoardItem from './BoardItem';
import AddForm from '../forms/InputForm';
import Title from './BoardTitle';
import styled from 'styled-components';
import { records } from '../../data/data';

interface BoardProps {
  id: number;
  title: string;
}
let i = 14;

export default function Board({ id, title }: BoardProps): JSX.Element {
  const [boardTitle] = useState(title);
  const [boardRecords, setBoardRecords] = useState(records);
  const [showAddModal, setShowAddModal] = useState(false);

  const getAuthor = () => {
    const author = localStorage.getItem('name');
    return author || '';
  };

  const getNewRecord = (newValue: string): void => {
    if (newValue !== '') {
      ++i;
      const newArr = [
        ...boardRecords,
        { id: i, dataId: id, label: newValue, author: getAuthor(), description: '' },
      ];
      setBoardRecords(newArr);
      setShowAddModal(false);
    }
  };

  const deleteRecord = (id: number): void => {
    setBoardRecords(boardRecords.filter((item) => item.id !== id));
  };

  const editRecord = (id: number, newValue: string): void => {
    if (newValue !== '') {
      setBoardRecords(
        boardRecords.map((item) => ({
          ...item,
          label: item.id === id ? newValue : item.label,
        }))
      );
    }
  };

  const editDescription = (id: number, newValue: string): void => {
    if (newValue !== '') {
      setBoardRecords(
        boardRecords.map((item) => ({
          ...item,
          description: item.id === id ? newValue : item.description,
        }))
      );
    }
  };

  const boardItems = boardRecords.map((item) => {
    return (
      <BoardItem
        key={Math.random()}
        id={item.id}
        label={item.label}
        author={item.author}
        description={item.description}
        deleteRecord={deleteRecord}
        editRecord={editRecord}
        editDescription={editDescription}
      />
    );
  });

  return (
    <StyledBoard className="board" key={id}>
      <Title key={Math.random()} title={boardTitle} id={id} />
      <StyledUl className="board__list">{boardItems}</StyledUl>
      {showAddModal ? (
        <AddForm
          getNewRecord={getNewRecord}
          show={true}
          showAdd={() => setShowAddModal(false)}
          action={'add'}
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
