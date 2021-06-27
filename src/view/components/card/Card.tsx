import React, { useState } from 'react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { makeGetCardByCardIdSelector } from '../../../redux/ducks/card/selectors';
import { deleteCard, editCard } from '../../../redux/ducks/card/slice';
import { makeGetCommentCountByCardId } from '../../../redux/ducks/comment/selectors';
import TrashIcon from '../../assets/delete-icon.svg';
import ModalCard from '../modal/content/ModalCard/ModalCard';
import Modal from '../modal/Modal';

interface CardProps {
  cardId: number;
  listId: number;
}
const Card = ({ cardId, listId }: CardProps): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);
  const getCardByListIdSelector = useMemo(makeGetCardByCardIdSelector, []);
  const [{ label }] = useSelector((state) => getCardByListIdSelector(state, cardId));
  const dispatch = useDispatch();
  const getCommentByCardId = useMemo(makeGetCommentCountByCardId, []);
  const comment = useSelector((state) => getCommentByCardId(state, cardId));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editCard({ id: cardId, text: e.target.value }));
  };

  return (
    <>
      <Li key={cardId} onDoubleClick={() => setOpenModal(true)}>
        <Label value={label} onChange={onChange} />
        <Image
          onClick={() => dispatch(deleteCard(cardId))}
          className="item__button-delete"
          src={TrashIcon}
          alt="delete"
        />
        {openModal && (
          <Modal
            allowClose={true}
            content={<ModalCard cardId={cardId} listId={listId} />}
            setParentModalShow={setOpenModal}
          />
        )}
      </Li>
      <CommentCount>Comments: {comment}</CommentCount>
    </>
  );
};

export default React.memo(Card);

const Label = styled.input`
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
  right: 10px;
  bottom: -20px;
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
