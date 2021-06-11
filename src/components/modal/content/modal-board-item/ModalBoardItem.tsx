import React from 'react';
import styled from 'styled-components';
import Description from './ModalBoardItemDescription';

interface ModalBoardItemProps {
  id: number;
  label: string;
  author: string;
  description: string;
  changeBoardItemState: Function;
}

export default function ModalBoardItem({
  id,
  label,
  author,
  description,
  changeBoardItemState,
}: ModalBoardItemProps): JSX.Element {
  return (
    <>
      <Scroll>
        <Title>{label}</Title>
        <Subtitle>Author: {author}</Subtitle>
        <Description
          id={id}
          description={description}
          changeBoardItemState={changeBoardItemState}
        />
      </Scroll>
    </>
  );
}

const Subtitle = styled.h2`
  margin: 0;
  position: absolute;
  top: 3px;
  left: 20px;
  font-size: 16px;
`;

const Title = styled.h1`
  width: 100%;
  height: 60px;
  overflow: auto;
  text-align: left;
  margin: 0;
  font-size: 30px;
`;

const Scroll = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;
