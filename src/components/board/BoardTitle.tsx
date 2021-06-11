import React, { useState } from 'react';
import { editBoardTitle } from '../../utils/ServiceWorker';
import styled from 'styled-components';

interface TitleProps {
  title: string;
  id: number;
}

export default function Title({ title, id }: TitleProps): JSX.Element {
  const [boardTitle, setBoardTitle] = useState(title);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(e.target.value);
  };

  const handleOnBlur = () => {
    editBoardTitle(id, boardTitle);
  };

  return (
    <BoardTitle
      className="board__title"
      onChange={handleOnChange}
      value={boardTitle}
      multiple
      onBlur={handleOnBlur}
    />
  );
}

// styles
const BoardTitle = styled.input`
  cursor: pointer;
  word-wrap: break-word;
  background-color: inherit;
  font-size: 14px;
  font-weight: 700;
  margin-top: 0;
  border: none;
  margin-bottom: 5px;
  color: #000;
`;
