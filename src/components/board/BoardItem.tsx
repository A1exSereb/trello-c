import React, { useState, useEffect } from 'react';
import AddForm from '../forms/InputForm';
import styled from 'styled-components';
import { deleteBoardItem } from '../../utils/ServiceWorker';
import { RecordType } from '../../data/data-types';
import TrashIcon from '../../assets/icons/delete-icon.svg';
import EditIcon from '../../assets/icons/edit-icon.svg';
import Modal from '../modal/Modal';
import ModalBoardItem from '../modal/content/modal-board-item/ModalBoardItem';
import { editRecord } from '../../utils/ServiceWorker';

interface BoardItemProps {
  id: number;
  label: string;
  author: string;
  dataId: number;
  description: string;
  setBoardRecords: React.Dispatch<React.SetStateAction<RecordType[]>>;
  boardRecords: Array<RecordType>;
}

export default function BoardItem({
  id,
  label,
  author,
  description,
  setBoardRecords,
  boardRecords,
}: BoardItemProps): JSX.Element | null {
  const [editingBoardItem, setEditingBoardItem] = useState(false);
  const [boardItemLabel] = useState(label);
  const [boardItemDescription, setBoardItemDescription] = useState(description);
  const [showModalBoardItem, setShowModalBoardItem] = useState(false);
  const [newInputValue, setNewInputValue] = useState('');

  useEffect(() => {
    if (newInputValue !== '') {
      editRecord(id, newInputValue, boardRecords, setBoardRecords);
      setNewInputValue('');
    }
  }, [setBoardRecords, id, newInputValue, boardRecords]);

  if (label === '') return null;

  return editingBoardItem ? (
    <AddForm
      show={true}
      setNewInputValue={setNewInputValue}
      setParentShowState={setEditingBoardItem}
    />
  ) : (
    <Li key={id} className="board__item" onDoubleClick={() => setShowModalBoardItem(true)}>
      {boardItemLabel}
      <Image
        className="item__button-edit"
        onClick={() => setEditingBoardItem(true)}
        src={EditIcon}
        alt="edit"
      />
      <Image
        className="item__button-delete"
        onClick={() => deleteBoardItem(id, setBoardRecords, boardRecords)}
        src={TrashIcon}
        alt="delete"
      />
      {showModalBoardItem ? (
        <Modal
          active={showModalBoardItem}
          setParentModalShow={setShowModalBoardItem}
          allowClose={true}
          content={
            <ModalBoardItem
              author={author}
              description={boardItemDescription}
              label={boardItemLabel}
              id={id}
              setBoardItemDescription={setBoardItemDescription}
            />
          }
        />
      ) : null}
    </Li>
  );
}

// styles

const Image = styled.img`
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
