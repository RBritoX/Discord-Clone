import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 17px;
  background-color: ${(props) => props.theme.colors.primary};
  
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;

  color: ${(props) => props.theme.colors.symbol};
`;

export const Title = styled.h1`
  margin-left: 9px;

  font-size: 16px;
  font-weight: bold;

  color: ${(props) => props.theme.colors.text};
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;

  background-color: ${(props) => props.theme.colors.text};
  opacity: 0.2;

  margin: 0 13px;
`;

export const Description = styled.span`
  font-size: 15px;
  color: ${(props) => props.theme.colors.gray};
`;
