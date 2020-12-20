import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: row;
  max-width: 900px;
  padding: 20px;

  > input,
  button {
    margin: 10px;
  }
`;

function NameEmailForm({ buttonText }) {
  return (
    <Form>
      <Input placeholder="Seu nome" require />
      <Input type="email" placeholder="Seu email" require />
      <Button>{buttonText}</Button>
    </Form>
  );
}

NameEmailForm.defaultProps = {
  buttonText: 'criar',
};

export default NameEmailForm;
