import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { deleteComment, editComment } from '../../../../../redux/ducks/comment/slice';
import { RootState } from '../../../../../redux/ducks/rootReducer';
import { useAppDispatch } from '../../../../../redux/store';
import TrashIcon from '../../../../assets/delete-icon.svg';
interface CommentProps {
  id: number;
  label: string;
  author: string;
}

const ModalCardComment = ({ id, label, author }: CommentProps): JSX.Element => {
  const { name: userName } = useSelector((state: RootState) => state.authorization);
  const dispatch = useAppDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editComment({ id: id, label: e.target.value }));
  };
  const isAuthor = () => {
    if (author === userName)
      return (
        <>
          <Input type="text" onChange={onChange} value={label} />
          <Image
            className="item__button-delete"
            src={TrashIcon}
            alt="delete"
            onClick={() => dispatch(deleteComment(id))}
          />
        </>
      );
    return <div>{label}</div>;
  };

  return (
    <Li className="modalboarditem__list-item" key={id}>
      <Label>{author} say:</Label>
      {isAuthor()}
    </Li>
  );
};

export default React.memo(ModalCardComment);

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

const Input = styled.input`
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
