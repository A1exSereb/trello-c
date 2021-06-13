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

  const handlerInput = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
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
    <Form className="inputform" onSubmit={onSubmit}>
      <Input className="inputform__input" value={inputValue} onInput={handlerInput} />
      <div>
        <OkButton className="inputform__button-add" onClick={() => setNewInputValue(inputValue)}>
          Submit
        </OkButton>
        <CancelButton className="inputform__button-close" onClick={onClose}>
          Cancel
        </CancelButton>
      </div>
    </Form>
  );
}
// styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Input = styled.textarea`
  background-color: #d7d7d7;
  margin-top: 5px;
  width: 95%;
  resize: none;
  align-self: flex-start;
  height: 50px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 3px;
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
  margin-right: 1px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
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
