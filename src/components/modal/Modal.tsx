/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { comments } from '../../data/data';
import TrashIcon from '../../icons/delete-icon.svg';
import EditIcon from '../../icons/edit-icon.svg';

interface ItemDescriptionProps {
  active: boolean;
  author: string;
  label: string;
  id: number;
  description: string;
  setActive: Function;
  editDescription: Function;
}
export default function ItemDescription({
  active,
  setActive,
  label,
  author,
  description,
  id,
}: ItemDescriptionProps): any {
  if (!active) return null;

  const closeModal = () => {
    setActive(false);
  };

  const commetsList = comments.map((item) => {
    return (
      <li key={item.id}>
        <div>{item.name}</div>
        <div>
          {item.label}
          <StyledImage src={EditIcon} alt="edit" />
          <StyledImage src={TrashIcon} alt="delete" />
        </div>
      </li>
    );
  });

  return (
    <StyledModalOverlay onClick={closeModal}>
      <StyledModal className="modal" onClick={(e) => e.stopPropagation()}>
        <StyledCloseButton onClick={closeModal}>X</StyledCloseButton>
        <Scroll>
          <StyledTitle>{label}</StyledTitle>
          <StyledSubtitle>Автор: {author}</StyledSubtitle>
          <div>{description}</div>
          <ul>{commetsList}</ul>
        </Scroll>
      </StyledModal>
    </StyledModalOverlay>
  );
}

// styles

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  max-width: 100%;
  height: 600px;
  max-height: 100%;
  padding: 25px;
  overflow: hidden;
  background-color: #fff;
`;

const StyledTitle = styled.h1`
  width: 100%;
  height: 100px;
  overflow: auto;
  text-align: center;
  margin: 0;
  font-size: 20px;
`;

const StyledSubtitle = styled.h2`
  margin: 0;
  font-size: 16px;
`;

const StyledImage = styled.img`
  width: 13px;
  height: 13px;
  margin-left: 5px;
  margin-top: 3px;
  cursor: pointer;
`;

const StyledModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
`;

const Scroll = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
  border: none;
  background-color: inherit;
  color: #ff0000;
  cursor: pointer;
`;
