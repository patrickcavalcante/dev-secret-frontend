import React from 'react';
import styled from 'styled-components';

import ImageContainer from '../Containers/ImageContainer';
import Logo from '../Logo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  color: ${({ theme }) => theme.colors.light};
  padding-left: 40px;
`;

export default function HomePageHeader() {
  return (
    <div>
      <ImageContainer>
        <Container>
          <Logo />
          <h2>A Melhor Brincadeixa do Natal</h2>
        </Container>
      </ImageContainer>
    </div>
  );
}
