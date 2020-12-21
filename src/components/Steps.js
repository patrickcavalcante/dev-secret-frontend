import React from 'react';
import styled from 'styled-components';
import StepCard from './StepCard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export default function Steps() {
  return (
    <>
      <H1>Como funciona?</H1>
      <Container>
        <StepCard
          title="1. Crie seu sorteio"
          description="Digite seu nome e e-mail, e crie o seu sorteio de forma rápida, fácil, segura e sem complicações."
        />
        <StepCard
          title="2. Compartilhe o link"
          description="Compartilhe o seu link de sorteio com seus amigos e todos que participaram da brincadeira"
        />
        <StepCard
          title="3. Sorteie!"
          description="Quando todos estiverem prontos, realize o sorteio. Cada pessoa receberá por e-mail seu respectivo par."
        />
      </Container>
    </>
  );
}
