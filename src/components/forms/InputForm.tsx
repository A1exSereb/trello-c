import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

interface InputFormProps {
  show: boolean;
  setNewInputValue: Function;
  setParentShowState: Function;
}

export default function InputForm({
  show,
  setNewInputValue,
  setParentShowState,
}: InputFormProps): JSX.Element | null {
  const [inputValue, setInputValue] = useState('');
  const [showInputForm, setShowInputForm] = useState(show);

  if (!showInputForm) return null;

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setShowInputForm(false);
    setParentShowState(false);
  };
  const onClose = () => {
    setShowInputForm(false);
    setParentShowState(false);
  };

  if (!showInputForm) return null;

  return (
    <form className="inputform" onSubmit={onSubmit}>
      <Input className="inputform__input" value={inputValue} onChange={handlerInput} type="text" />
      <OkButton className="inputform__button-add" onClick={() => setNewInputValue(inputValue)}>
        Yes
      </OkButton>
      <CancelButton className="inputform__button-close" onClick={onClose}>
        No
      </CancelButton>
    </form>
  );
}
// styles
const Input = styled.input`
  background-color: #d7d7d7;
  width: 65%;
  border: 1px solid #000;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 3px;
  border-right: none;
  outline: none;
`;

const Button = styled.button`
  border: 1px solid #000;
  padding: 3px;
  cursor: pointer;
  background-color: #000;
  color: #fff;
`;
const OkButton = styled(Button)`
  border-right: none;
  :hover {
    background-color: #fff;
    color: #000;
  }
`;
const CancelButton = styled(Button)`
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  :hover {
    background-color: #fff;
    color: #000;
  }
`;
