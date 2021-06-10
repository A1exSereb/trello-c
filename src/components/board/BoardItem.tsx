import React, { useState, useEffect } from 'react';
import AddForm from '../forms/InputForm';
import styled from 'styled-components';
import { deleteBoardItem } from '../../utils/ServiceWorker';
import { recordsTypes } from '../../data/data-types';
import TrashIcon from '../../assets/icons/delete-icon.svg';
import EditIcon from '../../assets/icons/edit-icon.svg';
import Modal from '../modal/Modal';
import { editRecord } from '../../utils/ServiceWorker';

interface BoardItemProps {
  id: number;
  label: string;
  author: string;
  dataId: number;
  description: string;
  setBoardRecords: Function;
  boardRecords: Array<recordsTypes>;
  editDescription(id: number, newValue: string): void;
}

export default function BoardItem({
  id,
  label,

  author,
  description,
  setBoardRecords,
  boardRecords,
  editDescription,
}: BoardItemProps): JSX.Element | null {
  const [editingBoardItem, setEditingBoardItem] = useState(false);
  const [boardItemLabel, setBoartItemLabel] = useState(label);
  const [showModalBoardItem, setShowModalBoardItem] = useState(false);
  const [newInputValue, setNewInputValue] = useState('');

  useEffect(() => {
    console.log('componentDidUpdate');
    if (newInputValue !== '') {
      editRecord(id, newInputValue, setBoartItemLabel);
      setNewInputValue('');
    }
  }, [editingBoardItem]);

  if (label === '') return null;

  return editingBoardItem ? (
    <AddForm
      show={true}
      // action={'edit'}
      // editingId={id}
      // showAdd={() => setEditingBoardItem(false)}
      setNewInputValue={setNewInputValue}
      setParentShowState={setEditingBoardItem}
    />
  ) : (
    <Li key={id} className="board__item" onDoubleClick={() => setShowModalBoardItem(true)}>
      {boardItemLabel}
      <StyledImage
        className="item__button-edit"
        onClick={() => setEditingBoardItem(true)}
        src={EditIcon}
        alt="edit"
      />
      <StyledImage
        className="item__button-delete"
        onClick={() => deleteBoardItem(id, setBoardRecords, boardRecords)}
        src={TrashIcon}
        alt="delete"
      />
      <Modal
        active={showModalBoardItem}
        setActive={setShowModalBoardItem}
        author={author}
        description={description}
        editDescription={editDescription}
        label={label}
        id={id}
      />
    </Li>
  );
}

// styles

const StyledImage = styled.img`
  width: 13px;
  height: 13px;
  margin-left: 5px;
  margin-top: 3px;
  cursor: pointer;
`;
const Li = styled.li`
  list-style: none;
  word-wrap: break-word;
  border: 1px solid #000;
  text-align: left;
  margin-top: 1px;
  padding: 3px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #fff;
`;
