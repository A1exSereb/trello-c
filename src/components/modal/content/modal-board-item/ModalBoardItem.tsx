import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Description from './ModalBoardItemDescription';
import CommentList from './ModalBoardItemComments';
import { newId, setNewComment } from '../../../../utils/ServiceWorker';
import InputForm from '../../../forms/InputForm';
import { CommentType } from '../../../../data/data-types';

interface ModalBoardItemProps {
  id: number;
  label: string;
  author: string;
  boardTitle: string;
  description: string;
  boardItemComments: Array<CommentType>;
  setBoardItemComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
  setBoardItemDescription: React.Dispatch<React.SetStateAction<string>>;
}

export default function ModalBoardItem({
  id,
  label,
  author,
  boardTitle,
  description,
  boardItemComments,
  setBoardItemComments,
  setBoardItemDescription,
}: ModalBoardItemProps): JSX.Element {
  const [newInputValue, setNewInputValue] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  useEffect(() => {
    if (newInputValue !== '') {
      setNewComment(id, newInputValue, setBoardItemComments, boardItemComments);
      setNewInputValue('');
    }
  }, [boardItemComments, id, newInputValue]);

  const comment = boardItemComments.map((item) => (
    <CommentList
      key={newId()}
      id={item.id}
      label={item.label}
      name={item.name}
      boardItemComments={boardItemComments}
      setBoardItemComments={setBoardItemComments}
    />
  ));

  return (
    <>
      <Title className='modalboarditem__title'>{boardTitle}</Title>
      <Title className='modalboarditem__title'>{label}</Title>
      <Subtitle className='modalboarditem__subtitle'>Author: {author}</Subtitle>
      <Description
        id={id}
        description={description}
        changeBoardItemDescription={setBoardItemDescription}
      />
      <Scroll>
        <Ul className='modalboarditem__list'>{comment}</Ul>
      </Scroll>
      {showAddModal ? (
        <InputForm
          setNewInputValue={setNewInputValue}
          show={true}
          setParentShowState={setShowAddModal}
        />
      ) : (
        <AddComment className='modalboarditem__button-add' onClick={() => setShowAddModal(true)}>Add comment</AddComment>
      )}
    </>
  );
}

const Subtitle = styled.h2`
  margin: 0;
  position: absolute;
  top: 3px;
  left: 20px;
  font-size: 16px;
`;

const Title = styled.h1`
  width: 100%;
  height: 60px;
  overflow: auto;
  text-align: left;
  margin: 0;
  font-size: 30px;
`;

const Scroll = styled.div`
  width: 100%;
  height: 350px;
  overflow: auto;
`;
const Ul = styled.ul`
  height: 200px;
  padding: 20px;
`;
const AddComment = styled.button`
  border: none;
  display: block;
  text-align: center;
  margin-top: 10px;
  background-color: inherit;
  cursor: pointer;
  color: #000;
  width: 200px;
  height: 40px;
  :hover {
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #450045;
    color: #fff;
  }
`;
