import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getListSelectorById } from '../../../redux/ducks/list/selectors';
import { editTitle } from '../../../redux/ducks/list/slice';

interface ListTitleProps {
  listId: number;
}

const ListTitle = ({ listId }: ListTitleProps): JSX.Element => {
  console.log(useSelector((state) => getListSelectorById(state, listId)));
  const [{ title }] = useSelector((state) => getListSelectorById(state, listId));
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editTitle({ id: listId, title: e.target.value }));
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
