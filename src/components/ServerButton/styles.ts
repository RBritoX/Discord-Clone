import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${(props) =>
    props.isHome ? `${props.theme.colors.secondary}` : `${props.theme.colors.primary}`};

  position: relative;
  cursor: pointer;

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    width: 9px;
    height: 9px;

    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);

    background-color: ${(props) => props.theme.colors.text};
    border-radius: 50%;

    content: '';
    display: ${(props) => (props.hasNotifications ? 'inline' : 'none')};
  }

  &::after {
    background-color: ${(props) => props.theme.colors.notification};
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid ${(props) => props.theme.colors.quaternary};

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};

    content: '${(props) => props.mentions && props.mentions}';
    display: ${(props) =>
      props.mentions && props.mentions > 0 ? 'inline' : 'none'}
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? `${props.theme.colors.rocketseat}` : `${props.theme.colors.primary}`};
  }
`;
