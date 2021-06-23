import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Card from '../card/Card';
import { ListTitle } from './ListTitle';
import InputForm from '../forms/InputForm';
import { listActions } from '../../../redux/ducks/list/actions';
// import { createSelector } from 'reselect';

const Lists = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootStateOrAny) => state.list);
  const card = useSelector((state: RootStateOrAny) => state.card);

  return (
    <>
      {list.map((item) => {
        const { id: listId, title, adding } = item;
        return (
          <List key={listId} className="board">
            <ListTitle title={title} id={listId} />
            <Ul key={listId}>
              {card
                .filter((item) => {
                  console.log(item);
                  return item.dataId === listId;
                })
                .map((item) => {
                  console.log(item);
                  return <Card key={item.id} label={item.label} id={item.id} />;
                })}
            </Ul>
            {adding ? (
              <InputForm id={listId} />
            ) : (
              <AddItem
                className="board__additem"
                onClick={() => dispatch(listActions.setAddCard(listId))}
              >
                Add
              </AddItem>
            )}
          </List>
        );
      })}
    </>
  );
};

export default Lists;
// styles

const List = styled.div`
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
