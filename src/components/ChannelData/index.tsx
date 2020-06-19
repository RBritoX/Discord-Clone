import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import * as S from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <S.Container>
      <S.Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Nome do Usuário"
            date="19/06/2020"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        ))}

        <ChannelMessage
          author="Chatbot"
          date="21/06/2020"
          content={
            <>
              <Mention>@Raphael Brito</Mention>, this is a mention
            </>
          }
          hasMention
          isBot
        />
      </S.Messages>

      <S.InputWrapper>
        <S.Input type="text" placeholder="Conversarem #chat-livre" />
        <S.InputIcon />
      </S.InputWrapper>
    </S.Container>
  );
};

export default ChannelData;
