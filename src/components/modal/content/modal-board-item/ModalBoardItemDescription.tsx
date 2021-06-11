import React, { useState } from 'react';
import styled from 'styled-components';
import { editBoardItemDescription } from '../../../../utils/ServiceWorker';

interface ItemDescriptionProps {
  id: number;
  description: string;
  changeBoardItemState: Function;
}
export default function ModalDescription({
  id,
  description,
  changeBoardItemState,
}: ItemDescriptionProps): JSX.Element {
  const [modalDescription, setModalDescription] = useState(description);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalDescription(e.target.value);
    changeBoardItemState(e.target.value);
  };

  // service worker

  const handleOnBlur = () => {
    editBoardItemDescription(id, modalDescription);
  };

  return (
    <Description
      onChange={handleOnChange}
      value={modalDescription}
      multiple
      onBlur={handleOnBlur}
    />
  );
}

// styles

const Description = styled.input`
  width: 90%;
  background-color: #a09f9f;
  border: 1px solid black;
  height: 100px;
  padding: 5px;
  margin: 0 auto;
  border: none;
  overflow: auto;
  border-radius: 10px;
`;
