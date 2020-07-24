import React from 'react';

import logo from '../../assets/logo-rocketseat.svg';
import { Button } from './styles';

export interface Props {
  isHome?: boolean;
  hasNotification?: boolean;
  selected?: boolean;
  hasMetions?: number;
}

const ServerButton: React.FC<Props> = ({
  hasMetions,
  hasNotification,
  isHome,
  selected,
}) => {
  return (
    <Button
      hasMetions={hasMetions}
      hasNotification={hasNotification}
      isHome={isHome}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={logo} alt="logo" />}
    </Button>
  );
};

export default ServerButton;
