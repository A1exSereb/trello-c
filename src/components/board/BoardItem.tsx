import React, { useState, useEffect } from 'react';
import AddForm from '../forms/InputForm';
import styled from 'styled-components';
import { boardItemComment, deleteBoardItem } from '../../utils/ServiceWorker';
import { RecordType } from '../../data/data-types';
import TrashIcon from '../../assets/icons/delete-icon.svg';
import EditIcon from '../../assets/icons/edit-icon.svg';
import Modal from '../modal';
import ModalBoardItem from '../modal/content/modal-board-item';
import { editRecord } from '../../utils/ServiceWorker';

interface BoardItemProps {
  id: number;
  label: string;
  author: string;
  dataId: number;
  boardTitle: string;
  description: string;
  setBoardRecords: React.Dispatch<React.SetStateAction<RecordType[]>>;
  boardRecords: Array<RecordType>;
}

export default function BoardItem({
  id,
  label,
  author,
  description,
  boardTitle,
  setBoardRecords,
  boardRecords,
}: BoardItemProps): JSX.Element | null {
  const [editingBoardItem, setEditingBoardItem] = useState(false);
  const [boardItemLabel, setBoardItemLabel] = useState(label);
  const [boardItemDescription, setBoardItemDescription] = useState(description);
  const [boardItemComments, setBoardItemComments] = useState(boardItemComment(id));
  const [showModalBoardItem, setShowModalBoardItem] = useState(false);
  const [newInputValue, setNewInputValue] = useState('');

  useEffect(() => {
    if (newInputValue !== '') {
      editRecord(id, newInputValue, boardRecords, setBoardRecords);
      setNewInputValue('');
    }
  }, [setBoardRecords, id, newInputValue, boardRecords]);

  if (label === '') return null;
  if (editingBoardItem)
    return (
      <AddForm
        show={true}
        setNewInputValue={setNewInputValue}
        setParentShowState={setEditingBoardItem}
      />
    );

  return (
    <>
      <Li key={id} className="board__item" onDoubleClick={() => setShowModalBoardItem(true)}>
        {boardItemLabel}
        <div>
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
        </div>
        {showModalBoardItem && (
          <Modal
            active={showModalBoardItem}
            setParentModalShow={setShowModalBoardItem}
            allowClose={true}
            content={
              <ModalBoardItem
                author={author}
                description={boardItemDescription}
                boardTitle={boardTitle}
                label={boardItemLabel}
                setBoardItemLabel={setBoardItemLabel}
                id={id}
                boardItemComments={boardItemComments}
                setBoardItemComments={setBoardItemComments}
                setBoardItemDescription={setBoardItemDescription}
              />
            }
          />
        )}
      </Li>
      <CommentCount>Comments: {boardItemComments.length}</CommentCount>
    </>
  );
}

// styles
const CommentCount = styled.div`
  height: 20px;
  display: inline;
  border: 1px solid #000;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: gray;
`;

const Image = styled.img`
  width: 13px;
  height: 13px;
  margin-left: 5px;
  margin-top: 3px;
  cursor: pointer;
`;
const Li = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  word-wrap: break-word;
  border: 1px solid #000;
  text-align: left;
  margin-top: 3px;
  padding: 3px;
  cursor: pointer;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  background-color: #fff;
`;
