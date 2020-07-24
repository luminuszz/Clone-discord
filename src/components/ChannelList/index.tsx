import React from 'react';

import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton ChannelName="LOL" />
      <ChannelButton ChannelName="Clash" />
      <ChannelButton ChannelName="Texto" />
      <ChannelButton ChannelName="Apex" />
      <ChannelButton ChannelName="Valorant" />
    </Container>
  );
};
export default ChannelList;
