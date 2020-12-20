import React from 'react';
import styled from 'styled-components';

import ImageContainer from '../Containers/ImageContainer';
import Logo from '../Logo';
import NameEmailForm from '../NameEmailForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  color: ${({ theme }) => theme.colors.light};
  padding-left: 40px;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export default function HomePageHeader() {
  return (
    <div>
      <ImageContainer>
        <Container>
          <Logo />
          <h2>A Melhor Brincadeixa do Natal</h2>
        </Container>
        <FormDiv>
          <NameEmailForm />
        </FormDiv>
      </ImageContainer>
    </div>
  );
}
