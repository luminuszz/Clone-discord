import React from 'react';

import {
  Container,
  HashTagIcon,
  Title,
  Separetor,
  Description,
} from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashTagIcon />

      <Title>Chat-Livre</Title>
      <Separetor />
      <Description>Canal aberto para conversas</Description>
    </Container>
  );
};

export default ChannelInfo;
