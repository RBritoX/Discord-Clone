import React from 'react';

import * as S from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <S.User>
      <S.Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </S.User>
  );
};

const UserList: React.FC = () => {
  return (
    <S.Container>
      <S.Role>Disponível - 1</S.Role>
      <UserRow nickname="Raphael Brito" />

      <S.Role>Offline - 18</S.Role>
      <UserRow nickname="Chatbot" isBot />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
      <UserRow nickname="Nome do Usuário" />
    </S.Container>
  );
};

export default UserList;
