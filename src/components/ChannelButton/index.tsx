import React from 'react';

import { Container, HastagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
  ChannelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ ChannelName, selected }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HastagIcon />
        <span>{ChannelName}</span>
      </div>
      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
