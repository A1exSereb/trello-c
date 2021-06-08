import React, { useState } from 'react';
import TrashIcon from '../icons/delete-icon.svg';
import EditIcon from '../icons/edit-icon.svg';
import AddForm from './forms/InputForm';
import styled from 'styled-components';

interface BoardItemProps {
  id: number;
  label: string;
  deleteRecord: Function;
  editRecord: Function;
}

export default function BoardItem({ id, label, deleteRecord, editRecord }: BoardItemProps): any {
  const [editing, setEditing] = useState(false);

  return editing ? (
    <AddForm
      show={true}
      action={'edit'}
      editingId={id}
      showAdd={() => setEditing(false)}
      getNewRecord={editRecord}
    />
  ) : (
    <Li key={id} className="board__item">
      {label}
      <StyledImage
        className="item__button-edit"
        onClick={() => setEditing(true)}
        src={EditIcon}
        alt="edit"
      />
      <StyledImage
        className="item__button-delete"
        onClick={() => deleteRecord(id)}
        src={TrashIcon}
        alt="delete"
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
