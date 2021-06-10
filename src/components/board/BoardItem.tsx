import React, { useState } from 'react';
import AddForm from '../forms/InputForm';
import styled from 'styled-components';
import TrashIcon from '../../assets/icons/delete-icon.svg';
import EditIcon from '../../assets/icons/edit-icon.svg';
import Modal from '../modal/Modal';

interface BoardItemProps {
  id: number;
  label: string;
  author: string;
  description: string;
  deleteRecord(id: number): void;
  editRecord(id: number, newValue: string): void;
  editDescription(id: number, newValue: string): void;
}

export default function BoardItem({
  id,
  label,
  author,
  description,
  deleteRecord,
  editRecord,
  editDescription,
}: BoardItemProps): JSX.Element {
  const [editingBoardItem, setEditingBoardItem] = useState(false);
  const [showModalBoardItem, setShowModalBoardItem] = useState(false);

  return editingBoardItem ? (
    <AddForm
      show={true}
      action={'edit'}
      editingId={id}
      showAdd={() => setEditingBoardItem(false)}
      getNewRecord={editRecord}
    />
  ) : (
    <Li key={id} className="board__item" onDoubleClick={() => setShowModalBoardItem(true)}>
      {label}
      <StyledImage
        className="item__button-edit"
        onClick={() => setEditingBoardItem(true)}
        src={EditIcon}
        alt="edit"
      />
      <StyledImage
        className="item__button-delete"
        onClick={() => deleteRecord(id)}
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
