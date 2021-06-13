import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Description from './ModalBoardItemDescription';
import CommentList from './ModalBoardItemComments';
import { boardItemComment, newId, setNewComment } from '../../../../utils/ServiceWorker';
import InputForm from '../../../forms/InputForm';

interface ModalBoardItemProps {
  id: number;
  label: string;
  author: string;
  description: string;
  setBoardItemDescription: React.Dispatch<React.SetStateAction<string>>;
}

export default function ModalBoardItem({
  id,
  label,
  author,
  description,
  setBoardItemDescription,
}: ModalBoardItemProps): JSX.Element {
  const [boardItemComments, setBoardItemComments] = useState(boardItemComment(id));
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
      <Title>{label}</Title>
      <Subtitle>Author: {author}</Subtitle>
      <Description
        id={id}
        description={description}
        changeBoardItemDescription={setBoardItemDescription}
      />
      <Scroll>
        <Ul>{comment}</Ul>
      </Scroll>
      {showAddModal ? (
        <InputForm
          setNewInputValue={setNewInputValue}
          show={true}
          setParentShowState={setShowAddModal}
        />
      ) : (
        <AddComment onClick={() => setShowAddModal(true)}>Add comment</AddComment>
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
