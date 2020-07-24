import React from 'react';

import ServerButton from '../ServerButton';
import { Container, Separetor } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />
      <Separetor />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotification />
      <ServerButton hasMetions={70} />
      <ServerButton />
      <ServerButton hasMetions={3} />
      <ServerButton />
      <ServerButton hasMetions={80} />
      <ServerButton hasNotification hasMetions={3} />
      <ServerButton hasNotification />
    </Container>
  );
};

export default ServerList;
