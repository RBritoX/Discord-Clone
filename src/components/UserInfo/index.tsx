import React from 'react';

import * as S from './styles';

const UserInfo: React.FC = () => {
  return (
    <S.Container>
      <S.Profile>
        <S.Avatar />
        <S.UserData>
          <strong>Raphael Brito</strong>
          <span>#7375</span>
        </S.UserData>
      </S.Profile>

      <S.Icons>
        <S.MicIcon />
        <S.HeadphoneIcon />
        <S.SettingsIcon />
      </S.Icons>
    </S.Container>
  );
};

export default UserInfo;
