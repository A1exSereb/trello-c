import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import { cardActions } from '../../../redux/ducks/card/actions';
import { setAddCard } from '../../../redux/ducks/list/slice';
import { commentActions } from '../../../redux/ducks/comment/actions';
interface InputFormProps {
  id: number;
  parent: string;
  parentSetState?: React.Dispatch<React.SetStateAction<boolean>>;
}
const InputForm = ({ id, parent, parentSetState }: InputFormProps): JSX.Element => {
  const dispatch = useDispatch();
  const { name } = useSelector((state: DefaultRootState) => state.authorization);
  const onSubmit = (value) => {
    switch (parent) {
      case 'modal-card':
        dispatch(commentActions.addComment(id, name, value.text));
        parentSetState(false);
        break;
      case 'list':
        dispatch(cardActions.addCard(id, value.text, name));
        dispatch(setAddCard(id));
        break;
      default:
        break;
    }
  };

  const onClose = () => {
    switch (parent) {
      case 'modal-card':
        parentSetState(false);
        break;
      case 'list':
        dispatch(listActions.setAddCard(id));
        break;
      default:
        break;
    }
  };
  const placeholderText = () => {
    switch (parent) {
      case 'modal-card':
        return 'comment text';
      case 'list':
        return 'card name';
      default:
        break;
    }
  };
  return (
    <Form
      name="card"
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="text" component="input" placeholder={placeholderText()} />
          </div>

          <OkButton type="submit">Ok</OkButton>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </form>
      )}
    />
  );
};

const Button = styled.button`
  border: 1px solid #000;
  padding: 3px;
  cursor: pointer;
  background-color: #000;
  color: #fff;
`;
const OkButton = styled(Button)`
  border-right: none;
  margin-right: 1px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  :hover {
    background-color: #fff;
    color: #000;
  }
`;
const CancelButton = styled(Button)`
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  :hover {
    background-color: #fff;
    color: #000;
  }
`;

export default InputForm;
