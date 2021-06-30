import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import { useSelector } from 'react-redux';
import { authorizationSelector } from 'redux/ducks/authorization/selectors';
interface InputFormProps {
  parent: string;
  onSubmitForm: Function;
  onCloseForm: Function;
}
const InputForm = ({ parent, onCloseForm, onSubmitForm }: InputFormProps): JSX.Element => {
  const { name } = useSelector(authorizationSelector);
  const onSubmit = (value) => {
    onSubmitForm(value.text, name);
    onCloseForm();
  };

  const onClose = () => {
    onCloseForm();
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
