import React, { useState } from 'react';
import styled from 'styled-components';

interface AddFormProps {
  show: boolean;
  getNewRecord: Function;
  showAdd: Function;
  action: string;
  editingId?: number | null;
}

export default function AddForm({
  show,
  getNewRecord,
  showAdd,
  action,
  editingId,
}: AddFormProps): any {
  const [inputValue, setInputValue] = useState('');
  const [isShow, setIsShow] = useState(show);

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: any): void => {
    e.preventDefault();
    setIsShow(false);
    showAdd();
  };
  const onClose = () => {
    setIsShow(false);
    showAdd();
  };

  if (!isShow) return null;

  return (
    <form className="inputform" onSubmit={onSubmit}>
      <StyledInput
        className="inputform__input"
        value={inputValue}
        onChange={handlerInput}
        type="text"
      />
      {action === 'add' ? (
        <OkButton className="inputform__button-add" onClick={() => getNewRecord(inputValue)}>
          Yes
        </OkButton>
      ) : (
        <OkButton
          className="inputform__button-edit"
          onClick={() => getNewRecord(editingId, inputValue)}
        >
          Yes
        </OkButton>
      )}
      <CancelButton className="inputform__button-close" onClick={onClose}>
        No
      </CancelButton>
    </form>
  );
}
// styles
const StyledInput = styled.input`
  background-color: #d7d7d7;
  width: 65%;
  border: 1px solid #000;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 3px;
  border-right: none;
  outline: none;
`;

const StyledButton = styled.button`
  border: 1px solid #000;
  padding: 3px;
  cursor: pointer;
  background-color: #000;
  color: #fff;
`;
const OkButton = styled(StyledButton)`
  border-right: none;
  :hover {
    background-color: #fff;
    color: #000;
  }
`;
const CancelButton = styled(StyledButton)`
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  :hover {
    background-color: #fff;
    color: #000;
  }
`;
