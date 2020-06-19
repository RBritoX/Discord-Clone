import styled from 'styled-components';
import { AlternateEmail } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Messages = styled.div`
  padding: 20px 0;

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.tertiary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const InputWrapper = styled.div`
  width: 100%;

  padding: 0 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;

  padding: 0 10px 0 57px;
  border-radius: 7px;

  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.chatInput};

  position: relative;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }

  ~ svg {
    position: relative;
    top: -50%;
    left: 14px;
    transition: 180ms ease-in-out;
  }
`;

export const InputIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;

  color: ${(props) => props.theme.colors.gray};
`;
