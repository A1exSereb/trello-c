import React, { useState } from 'react';
import { editBoardTitle } from '../../utils/ServiceWorker';
import styled from 'styled-components';

interface TitleProps {
  title: string;
  id: number;
  setParentBoardTitle: React.Dispatch<React.SetStateAction<string>>;
}

export default function BoardTitle({ title, id, setParentBoardTitle }: TitleProps): JSX.Element {
  const [boardTitle, setBoardTitle] = useState(title);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(e.target.value);
  };

  const handleOnBlur = () => {
    editBoardTitle(id, boardTitle);
    setParentBoardTitle(boardTitle);
  };

  return (
    <Title
      className="board__title"
      onChange={handleOnChange}
      value={boardTitle}
      multiple
      onBlur={handleOnBlur}
    />
  );
}

// styles
const Title = styled.input`
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
