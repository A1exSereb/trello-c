import React, { useState } from 'react';
import styled from 'styled-components';
import { editBoardItemDescription } from '../../../../utils/ServiceWorker';

interface ItemDescriptionProps {
  id: number;
  description: string;
  changeBoardItemDescription: Function;
}
export default function ModalDescription({
  id,
  description,
  changeBoardItemDescription,
}: ItemDescriptionProps): JSX.Element {
  const [modalDescription, setModalDescription] = useState(description);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setModalDescription(e.target.value);
    changeBoardItemDescription(e.target.value);
  };

  // service worker

  const handleOnBlur = () => {
    editBoardItemDescription(id, modalDescription);
  };

  return (
    <Description
      onInput={handleOnChange}
      value={modalDescription !== '' ? modalDescription : 'Write description here...'}
      onBlur={handleOnBlur}
    />
  );
}

// styles

const Description = styled.textarea`
  width: 100%;
  background-color: inherit;
  font-size: 20px;
  text-align: top;
  overflow: auto;
  resize: none;
  white-space: normal;
  border: 1px solid black;
  height: 100px;
  padding: 5px;
  margin: 0 auto;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
`;
