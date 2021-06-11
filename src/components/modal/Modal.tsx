import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../utils/Api';

interface ItemDescriptionProps {
  active: boolean;
  author?: string;
  label?: string;
  allowClose: boolean;
  id?: number;
  description?: string;
  content: JSX.Element | null;
  setParentModalShow?: Function;
}
export default function Modal({
  active,
  allowClose,
  content,
  setParentModalShow,
}: ItemDescriptionProps): JSX.Element | null {
  const [modalActive, setModalActive] = useState(active);

  if (!modalActive) return null;

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    setModalActive(false);
    setParentModalShow ? setParentModalShow(false) : null;
  };

  /* const commetsList = comments.map((item) => {
    return (
      <li key={item.id}>
        <div>{item.name}</div>
        <div>
          {item.label}
          <Image src={EditIcon} alt="edit" />
          <Image src={TrashIcon} alt="delete" />
        </div>
      </li>
    );
  }); */

  return allowClose ? (
    <ModalOverlay onKeyDown={(e) => handleKeyPress(e)} onClick={closeModal} tabIndex={-1}>
      <ModalContainer className="modal" onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>X</CloseButton>
        {content}
      </ModalContainer>
    </ModalOverlay>
  ) : (
    <ModalOverlay>
      <ModalContainer className="modal">
        <ModalContext.Provider value={setModalActive}>{content}</ModalContext.Provider>
      </ModalContainer>
    </ModalOverlay>
  );
}

// styles

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  max-width: 100%;
  height: 600px;
  max-height: 100%;
  padding: 25px;
  padding-top: 35px;
  overflow: hidden;
  background-color: #fff;
`;

/* const Image = styled.img`
  width: 13px;
  height: 13px;
  margin-left: 5px;
  margin-top: 3px;
  cursor: pointer;
`; */

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
  border: none;
  background-color: inherit;
  color: #ff0000;
  cursor: pointer;
`;
