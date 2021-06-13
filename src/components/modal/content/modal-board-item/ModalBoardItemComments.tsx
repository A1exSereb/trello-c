import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddForm from '../../../forms/InputForm';
import { CommentType } from '../../../../data/data-types';
import EditIcon from '../../../../assets/icons/edit-icon.svg';
import TrashIcon from '../../../../assets/icons/delete-icon.svg';
import { deleteComment, editComment, getAuthor } from '../../../../utils/ServiceWorker';
interface CommentListProps {
  id: number;
  label: string;
  name: string;
  setBoardItemComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
  boardItemComments: Array<CommentType>;
}

export default function CommentList({
  id,
  label,
  name,
  setBoardItemComments,
  boardItemComments,
}: CommentListProps): JSX.Element {
  const [editingBoardItem, setEditingBoardItem] = useState(false);
  const [newInputValue, setNewInputValue] = useState('');
  useEffect(() => {
    if (newInputValue !== '') {
      editComment(id, newInputValue, boardItemComments, setBoardItemComments);
      setNewInputValue('');
    }
  }, [id, newInputValue, boardItemComments, setBoardItemComments]);

  return (
    <Li key={id}>
      <Label>{name} say:</Label>
      {editingBoardItem ? (
        <AddForm
          show={true}
          setNewInputValue={setNewInputValue}
          setParentShowState={setEditingBoardItem}
        />
      ) : (
        <>
          <div>{label}</div>
          {name === getAuthor() ? (
            <>
              <Image
                className="item__button-edit"
                onClick={() => setEditingBoardItem(true)}
                src={EditIcon}
                alt="edit"
              />
              <Image
                className="item__button-delete"
                onClick={() => deleteComment(id, setBoardItemComments, boardItemComments)}
                src={TrashIcon}
                alt="delete"
              />
            </>
          ) : null}
        </>
      )}
    </Li>
  );
}
const Li = styled.li`
  list-style: none;
  position: relative;
  word-wrap: break-word;
  border: 1px solid #000;
  text-align: left;
  margin-bottom: 25px;
  margin-top: 1px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #fff;
`;
const Image = styled.img`
  width: 13px;
  height: 13px;
  margin-left: 5px;
  margin-top: 3px;
  cursor: pointer;
`;
const Label = styled.label`
  width: 100%;
  position: absolute;
  top: -25px;
`;
