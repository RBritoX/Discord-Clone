import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: ${(props) => props.theme.colors.senary};
  }

  &:hover,
  &.active {
    background-color: ${(props) => props.theme.colors.quinary};

    > div span {
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: ${(props) => props.theme.colors.symbol};
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: ${(props) => props.theme.colors.symbol};
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  margin-left: 4px;

  color: ${(props) => props.theme.colors.symbol};
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;
