import React from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { commentActions } from '../../../../../redux/ducks/comment/actions';
import TrashIcon from '../../../../assets/delete-icon.svg';
interface CommentProps {
  id: number;
  label: string;
  author: string;
}

const Comment = ({ id, label, author }: CommentProps): JSX.Element => {
  const { name: userName } = useSelector((state: DefaultRootState) => state.authorization);
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(commentActions.editComment(id, e.target.value));
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
            onClick={() => dispatch(commentActions.deleteComment(id))}
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

export default React.memo(Comment);

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
  height: 20px;
  border: none;
  background-color: inherit;
`;
