import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { cardActions } from '../../../redux/ducks/card/actions';
import { listActions } from '../../../redux/ducks/list/actions';
interface InputFormProps {
  id: number;
}
const InputForm = ({ id }: InputFormProps) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.authorization);
  const onSubmit = (value: Object) => {
    dispatch(cardActions.addCard(id, value.text, name));
    dispatch(listActions.setAddCard(id));
  };

  return (
    <Form
      name="card"
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="text" component="input" placeholder="card name" />
          </div>

          <OkButton type="submit">Ok</OkButton>
          <CancelButton onClick={() => dispatch(listActions.setAddCard(id))}>Cancel</CancelButton>
        </form>
      )}
    />
  );
};
/* const fForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`; */

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
