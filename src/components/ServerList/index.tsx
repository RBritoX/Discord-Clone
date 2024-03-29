import React from 'react';

import ServerButton from '../ServerButton';

import * as S from './styles';

const ServerList: React.FC = () => {
  return (
    <S.Container>
      <ServerButton isHome />

      <S.Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={15} />
      <ServerButton />
      <ServerButton />
    </S.Container>
  );
};

export default ServerList;
