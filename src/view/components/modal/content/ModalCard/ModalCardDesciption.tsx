import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteCardDescription, editCardDescription } from '../../../../../redux/ducks/card/slice';
interface DescriptionProps {
  id: number;
  description: string;
}
const ModalCardDesciption = ({ id, description }: DescriptionProps): JSX.Element => {
  const [addingDescription, setAddingDescription] = useState(false);
  const dispatch = useDispatch();

  if (description === '' && addingDescription === false)
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

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    dispatch(editCardDescription({ id: id, text: e.target.value }));
  };

  const deleteDescription = () => {
    dispatch(deleteCardDescription(id));
    setAddingDescription(false);
  };

  return (
    <DescriptionContainer className="description__container">
      <Description
        className="description__input"
        onInput={onChange}
        value={description}
        placeholder={'Write description here...'}
      />
      <DeleteButton className="description__button-delete" onClick={deleteDescription}>
        X
      </DeleteButton>
    </DescriptionContainer>
  );
};

export default React.memo(ModalCardDesciption);

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
