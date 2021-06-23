import React from 'react';
import styled from 'styled-components';

const ModalCard = () => {
  return (
    <>
      <Title className="modalboarditem__title">ffff</Title>
      <Title className="modalboarditem__title">ffff</Title>
      <Subtitle className="modalboarditem__subtitle">Author: dddd</Subtitle>
      <Scroll>
        <Ul className="modalboarditem__list">1</Ul>
      </Scroll>
      <AddComment className="modalboarditem__button-add">Add comment</AddComment>
    </>
  );
};

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
  height: 350px;
  overflow: auto;
`;
const Ul = styled.ul`
  height: 200px;
  padding: 20px;
`;
const AddComment = styled.button`
  border: none;
  display: block;
  text-align: center;
  margin-top: 10px;
  background-color: inherit;
  cursor: pointer;
  color: #000;
  width: 200px;
  height: 40px;
  :hover {
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #450045;
    color: #fff;
  }
`;

export default ModalCard;
