import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary.Light};
  border: 0;
  border-radius: 10px;
  width: 88%;

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default function InputComponent(props) {
  return <Input {...props} />;
}
