import React, { FormEvent, useContext, useState } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../../utils/Api';

export default function ModalAuthorization(): JSX.Element | null {
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(true);
  const setModalActive = useContext(ModalContext);
  if (!visible) return null;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (name) {
      localStorage.setItem('name', name);
      setModalActive(false);
      setVisible(false);
    }
  };

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  return (
    <Form onSubmit={onSubmit} className="authorization__form">
      <Input
        className="authorization__input"
        value={name}
        type="text"
        placeholder="What is your name?"
        onChange={handlerInput}
      />
      <Button className="authorization__button-submit" type="submit">
        Sign In
      </Button>
    </Form>
  );
}

// styles

const Form = styled.form`
  margin: 100px auto;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
`;
const Input = styled.input`
  width: 60%;
  height: 40px;
  font-size: large;
`;
const Button = styled.button`
  margin-top: 4px;
  border: none;
  display: block;
  text-align: center;
  background-color: inherit;
  cursor: pointer;
  color: #000;
  width: 30%;
  height: 40px;
  :hover {
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #6f0;
    color: #000;
  }
`;
