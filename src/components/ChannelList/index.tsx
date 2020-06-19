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

      <ChannelButton channelName="geral" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="estudos" />
      <ChannelButton channelName="jogos" />
      <ChannelButton channelName="filmes" />
      <ChannelButton channelName="séries" />
      <ChannelButton channelName="livros" />
    </Container>
  );
};

export default ChannelList;
