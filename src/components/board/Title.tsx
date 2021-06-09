import React, { useState } from 'react';
import AddForm from './forms/InputForm';
import styled from 'styled-components';

interface TitleProps {
  title: string;
  editTitle(id: number, newValue: string): void;
  id: number;
}

export default function Title({ title, id, editTitle }: TitleProps): JSX.Element {
  const [editing, setEditing] = useState(false);

  return editing ? (
    <AddForm
      show={true}
      action={'edit'}
      editingId={id}
      getNewRecord={editTitle}
      showAdd={() => setEditing(false)}
    />
  ) : (
    <StyledTitle className="board__title" onDoubleClick={() => setEditing(true)}>
      {title}
    </StyledTitle>
  );
}

// styles
const StyledTitle = styled.h2`
  cursor: pointer;
  word-wrap: break-word;
  margin-top: 0;
  margin-bottom: 5px;
  color: #000;
`;
