import React, { useState } from 'react';
import styled from 'styled-components';
import { editBoardItemDescription } from '../../../../utils/ServiceWorker';

interface ItemDescriptionProps {
  id: number;
  description: string;
  changeBoardItemDescription: Function;
}
export default function ModalDescription({
  id,
  description,
  changeBoardItemDescription,
}: ItemDescriptionProps): JSX.Element {
  const [modalDescription, setModalDescription] = useState(description);
  const [addingDescription, setAddingDescription] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setModalDescription(e.target.value);
    changeBoardItemDescription(e.target.value);
  };

  // service worker

  const handleOnBlur = () => {
    editBoardItemDescription(id, modalDescription);
    setAddingDescription(false);
  };

  const deleteDescription = () => {
    setModalDescription('');
    editBoardItemDescription(id, '');
    changeBoardItemDescription('');
  };

  const toggleAddingDescription = () => {
    if (addingDescription) {
      return (
        <DescriptionContainer className="description__container">
          <Description
            className="description__input"
            onInput={handleOnChange}
            value={modalDescription}
            onBlur={handleOnBlur}
            placeholder={'Write description here...'}
          />
          <DeleteButton className="description__button-delete" onClick={() => deleteDescription()}>
            X
          </DeleteButton>
        </DescriptionContainer>
      );
    } else {
      if (modalDescription !== '') {
        return (
          <DescriptionContainer className="description__container">
            <Description
              className="description__input"
              onInput={handleOnChange}
              value={modalDescription}
              onBlur={handleOnBlur}
              placeholder={'Write description here...'}
            />
            <DeleteButton
              className="description__button-delete"
              onClick={() => deleteDescription()}
            >
              X
            </DeleteButton>
          </DescriptionContainer>
        );
      } else {
        return (
          <AddDescription
            className="description__button-add"
            onClick={() => {
              setAddingDescription(true);
            }}
          >
            Add description
          </AddDescription>
        );
      }
    }
  };

  return toggleAddingDescription();
}

// styles

const DescriptionContainer = styled.div`
  position: relative;
`;

const Description = styled.textarea`
  width: 95%;
  background-color: inherit;
  font-size: 20px;
  text-align: top;
  overflow: auto;
  resize: none;
  white-space: normal;
  border: 1px solid black;
  height: 80px;
  padding: 5px;
  margin: 0 auto;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const AddDescription = styled.button`
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
const DeleteButton = styled.button`
  display: inline;
  position: absolute;
  background-color: #fff;
  cursor: pointer;
  border: none;
  top: 30px;
  right: -10px;
`;
