import React, { useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import ModalCardComment from './ModalCardComment';
import InputForm from '../../../forms/InputForm';
import { makeGetCardByCardIdSelector } from '../../../../../redux/ducks/card/selectors';
import { useDispatch, useSelector } from 'react-redux';
import ModalCardDesciption from './ModalCardDesciption';
import { editCard } from '../../../../../redux/ducks/card/slice';
import { useMemo } from 'react';
import { makeGetListByIdSelector } from '../../../../../redux/ducks/list/selectors';
import { makeGetCommentByCardId } from '../../../../../redux/ducks/comment/selectors';
interface ModalCard {
  cardId: number;
  listId: number;
}
const ModalCard = ({ cardId, listId }: ModalCard): JSX.Element => {
  const getListByListIdSelector = useMemo(makeGetListByIdSelector, []);
  const getCardByCardIdSelector = useMemo(makeGetCardByCardIdSelector, []);
  const [{ label, description, author }] = useSelector((state) =>
    getCardByCardIdSelector(state, cardId)
  );
  const [{ title }] = useSelector((state) => getListByListIdSelector(state, listId));
  const getCommentByCardId = useMemo(makeGetCommentByCardId, []);
  const comment = useSelector((state) => getCommentByCardId(state, cardId));
  const [addComment, setAddComment] = useState(false);
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editCard({ id: cardId, text: e.target.value }));
  };
  return (
    <>
      <Title className="modalcard__title">{title}</Title>
      <CardTitle className="modalcard__title" value={label} onChange={onChange} />
      <Subtitle className="modalcard__subtitle">Author: {author}</Subtitle>
      <ModalCardDesciption id={cardId} description={description} />
      <Scroll>
        <Ul className="modalcard__list">
          {_.map(comment, (item) => {
            return (
              <ModalCardComment
                key={item.id}
                id={item.id}
                label={item.label}
                author={item.author}
              />
            );
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

const CardTitle = styled.input`
  cursor: pointer;
  background-color: inherit;
  font-size: 16px;
  resize: none;
  width: 98%;
  max-height: 100%;
  font-weight: 500;
  margin-top: 0;
  border: none;
  margin-bottom: 5px;
  overflow: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #000;
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
