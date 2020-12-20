import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 15px 30px;
  font-size: 14px;
  display: block;
  margin: 10px 0;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.secundary};
`;

export default function Button(props) {
  return <StyledButton {...props} />;
}
