import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const Form = styled.form``;

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
