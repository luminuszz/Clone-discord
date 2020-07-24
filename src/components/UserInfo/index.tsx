import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadPhoneIcon,
  SettingsIcon,
} from './styles';

const UserInfo: React.FC = () => (
  <Container>
    <Profile>
      <Avatar />
      <UserData />
    </Profile>

    <Icons>
      <MicIcon />
      <HeadPhoneIcon />
      <SettingsIcon />
    </Icons>
  </Container>
);

export default UserInfo;
