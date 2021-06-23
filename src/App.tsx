import React from 'react';
import './App.css';
import Lists from './view/components/list/List';
import Modal from './view/components/modal/Modal';
import Authorization from './view/components/modal/content/ModalAuthorization';
import { RootStateOrAny, useSelector } from 'react-redux';

const App = () => {
  const { logged } = useSelector((state: RootStateOrAny) => state.authorization);

  if (!logged) return <Modal active={true} content={<Authorization />} allowClose={false} />;

  return <Lists />;
};

export default App;
