import React, { useState } from 'react';
import { editTitle } from '../../utils/ServiceWorker';
import styled from 'styled-components';

interface TitleProps {
  title: string;
  id: number;
}

export default function Title({ title, id }: TitleProps): JSX.Element {
  const [editBoardTitle, setEditBoardTitle] = useState(false);
  const [boardTitle, setBoardTitle] = useState(title);

  const handleOnChange = (e: any) => {
    setBoardTitle(e.target.value);
  };

  const handleOnBlur = () => {
    editTitle(id, boardTitle);
    setEditBoardTitle(false);
  };

  return editBoardTitle ? (
    <input onChange={handleOnChange} autoFocus value={boardTitle} onBlur={handleOnBlur} />
  ) : (
    <StyledTitle className="board__title" onDoubleClick={() => setEditBoardTitle(true)}>
      {boardTitle}
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
