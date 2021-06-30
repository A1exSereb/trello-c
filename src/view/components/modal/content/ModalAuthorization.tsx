import React from 'react';
import { Form, Field } from 'react-final-form';
import { logIn } from 'redux/ducks/authorization/slice';
import { useAppDispatch } from 'redux/store';

export default function Authorization(): JSX.Element {
  const dispatch = useAppDispatch();

  const onSubmit = (value) => {
    if (value !== '') {
      dispatch(logIn(value.authorization));
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      name="name"
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>Welcome!</h2>
          <div>
            <Field name="authorization" component="input" placeholder="name" />
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
}
