import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import * as S from './styles';

interface Props {
  toggleTheme(): void;
}

const ChannelInfo: React.FC<Props> = ({ toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext);

  return (
    <S.Container>
      <S.Content>
      <S.HashtagIcon />

<S.Title>chat-livre</S.Title>

<S.Separator />

<S.Description>Canal aberto para conversas</S.Description>
      </S.Content>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={30}
        onColor={colors.quaternary}
        offColor={colors.quaternary}
      />
    </S.Container>
  );
};

export default ChannelInfo;
