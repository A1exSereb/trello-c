import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Card from '../card/Card';
import ListTitle from './ListTitle';
import InputForm from '../forms/InputForm';
import { listActions } from '../../../redux/ducks/list/actions';
import { getSelectCardById } from '../../../redux/ducks/card/selectors';
import _ from 'lodash';

interface ListProps {
  listId: number;
  title: string;
  adding: boolean;
}

const List = ({ listId, title, adding }: ListProps): JSX.Component => {
  const dispatch = useDispatch();
  const card = useSelector(getSelectCardById(listId));

  return (
    <Container className="list">
      <ListTitle title={title} id={listId} />
      <Ul>
        {_.map(card, (item) => {
          return <Card key={item.id} label={item.label} id={item.id} />;
        })}
      </Ul>
      {adding ? (
        <InputForm id={listId} parent={'list'} />
      ) : (
        <AddItem className="list__additem" onClick={() => dispatch(listActions.setAddCard(listId))}>
          Add
        </AddItem>
      )}
    </Container>
  );
};

export default React.memo(List);
// styles

const Container = styled.div`
  width: 200px;
  padding: 10px;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 10px;
  border-radius: 10px;
  border: 3px solid black;
  align-items: left;
  margin-right: 15px;
  background: linear-gradient(to top left, powderblue, pink);
`;
const Ul = styled.ul`
  padding: 0;
`;
const AddItem = styled.button`
  border: none;
  display: block;
  text-align: center;
  background-color: inherit;
  cursor: pointer;
  color: #000;
  width: 100%;
  height: 40px;
  :hover {
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #450045;
    color: #fff;
  }
`;
