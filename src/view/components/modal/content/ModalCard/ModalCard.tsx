import React, { useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import Comment from './ModalCardComment';
import InputForm from '../../../forms/InputForm';
interface ModalCard {
  cardId: number;
  comment: Array<any>;
}
const ModalCard = ({ cardId, comment }: ModalCard): JSX.Component => {
  const [addComment, setAddComment] = useState(false);
  console.log(comment);
  return (
    <>
      <Title className="modalcard__title">ffff</Title>
      <Title className="modalcard__title">ffff</Title>
      <Subtitle className="modalcard__subtitle">Author: dddd</Subtitle>
      <Scroll>
        <Ul className="modalcard__list">
          {_.map(comment, (item) => {
            return <Comment key={item.id} id={item.id} label={item.label} author={item.author} />;
          })}
        </Ul>
      </Scroll>
      {addComment ? (
        <InputForm id={cardId} parent={'modal-card'} parentSetState={setAddComment} />
      ) : (
        <AddComment className="modalcard__button-add" onClick={() => setAddComment(true)}>
          Add comment
        </AddComment>
      )}
    </>
  );
};
export default React.memo(ModalCard);
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
