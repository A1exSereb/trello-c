import React from 'react';
import './App.css';
import List from './view/components/list/List';
import Modal from './view/components/modal/Modal';
import Authorization from './view/components/modal/content/ModalAuthorization';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { RootState } from './redux/ducks/rootReducer';
import { selectLists } from './redux/ducks/list/selectors';

const App = () => {
  const { logged } = useSelector((state: RootState) => state.authorization);
  const lists = useSelector(selectLists);

  if (!logged) return <Modal content={<Authorization />} allowClose={false} />;

  return (
    <>
      {_.map(lists, (item) => {
        return <List key={item.id} listId={item.id} adding={item.adding} />;
      })}
    </>
  );
};

export default App;
