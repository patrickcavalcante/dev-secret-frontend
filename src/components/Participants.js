import React from 'react';
import styled from 'styled-components';

const H4 = styled.h4``;

const Container = styled.div``;

const ParticipantDiv = styled.div``;

const ParticipantDelete = styled.div``;

const Participant = ({}) => (
  <ParticipantDiv>
    <ParticipantDelete>Deletar</ParticipantDelete>
    Nome (email@gmail.com)
  </ParticipantDiv>
);

export default function Participants({}) {
  return (
    <>
      <H4>Participantes:</H4>
      <Container>
        <Participant />
      </Container>
    </>
  );
}
