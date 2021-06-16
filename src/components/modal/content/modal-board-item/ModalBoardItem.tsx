import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Description from './ModalBoardItemDescription';
import Comment from './ModalBoardItemComment';
import { editRecord, newId, setNewComment } from '../../../../utils/ServiceWorker';
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
  setBoardItemLabel: React.Dispatch<React.SetStateAction<string>>;
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
  setBoardItemLabel,
}: ModalBoardItemProps): JSX.Element {
  const [newInputValue, setNewInputValue] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  useEffect(() => {
    if (newInputValue !== '') {
      setNewComment(id, newInputValue, setBoardItemComments, boardItemComments);
      setNewInputValue('');
    }
  }, [boardItemComments, id, newInputValue, setBoardItemComments]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardItemLabel(e.target.value);
  };

  const handleOnBlur = () => {
    editRecord(id, label);
    setBoardItemLabel(label);
  };

  const comment = boardItemComments.map((item) => (
    <Comment
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
      <Title className="modalboarditem__title">{boardTitle}</Title>
      <Subtitle
        className="modalboarditem__title"
        value={label}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      ></Subtitle>
      <Author className="modalboarditem__subtitle">Author: {author}</Author>
      <Description
        id={id}
        description={description}
        changeBoardItemDescription={setBoardItemDescription}
      />
      <Scroll>
        <Ul className="modalboarditem__list">{comment}</Ul>
      </Scroll>
      {showAddModal ? (
        <InputForm
          setNewInputValue={setNewInputValue}
          show={true}
          setParentShowState={setShowAddModal}
        />
      ) : (
        <AddComment className="modalboarditem__button-add" onClick={() => setShowAddModal(true)}>
          Add comment
        </AddComment>
      )}
    </>
  );
}

const Author = styled.h2`
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
const Subtitle = styled.input`
  cursor: pointer;
  word-wrap: break-word;
  background-color: inherit;
  font-size: 26px;
  font-weight: 700;
  height: 80px;
  width: 100%;
  margin-top: 0;
  border: none;
  margin-bottom: 5px;
  color: #000;
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
