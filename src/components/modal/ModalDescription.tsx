import React, { useState } from 'react';
import styled from 'styled-components';
import AddForm from '../forms/InputForm';

interface ItemDescriptionProps {
  editing: boolean;
  id: number;
  editDescription: Function;
  closeEdit: Function;
  description: string;
}
export default function ModalDescription({
  editing,
  id,
  editDescription,
  closeEdit,
  description,
}: ItemDescriptionProps): any {
  const [modalDescription, setModalDescription] = useState(description);

  return editing ? (
    <AddForm
      show={true}
      action={'add'}
      editingId={id}
      getNewRecord={setModalDescription}
      showAdd={() => closeEdit(false)}
    />
  ) : (
    <StyledDescription onDoubleClick={() => closeEdit(true)}>{modalDescription}</StyledDescription>
  );
}

// styles

const StyledDescription = styled.div`
  width: 90%;
  background-color: #a09f9f;
  border: 1px solid black;
  height: 100px;
  padding: 5px;
  margin: 0 auto;
  overflow: auto;
  border-radius: 10px;
`;
