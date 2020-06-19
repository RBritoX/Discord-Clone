import React from 'react';

import * as S from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <S.Container className={selected ? 'active' : ''}>
      <div>
        <S.HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <S.InviteIcon />
        <S.SettingsIcon />
      </div>
    </S.Container>
  );
};

export default ChannelButton;
