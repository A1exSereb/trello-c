import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { listActions } from '../../../redux/ducks/list/actions';
interface ListTitleProps {
  title: string;
  id: number;
}
const ListTitle = ({ title, id }: ListTitleProps): JSX.Component => {
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(listActions.editTitle(id, e.target.value));
  };

  return <Title className="board__title" value={title} onChange={onChange} />;
};

export default React.memo(ListTitle);

const Title = styled.input`
  cursor: pointer;
  word-wrap: break-word;
  background-color: inherit;
  font-size: 26px;
  width: 98%;
  font-weight: 700;
  margin-top: 0;
  border: none;
  margin-bottom: 5px;
  color: #000;
`;
