import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../../utils/usePersistedState';

import { Grid } from './styles';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData';

const Layout: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  
  return (
    <Grid>
      <ThemeProvider theme={theme}>
        <ServerList />
        <ServerName />
        <ChannelInfo toggleTheme={toggleTheme} />
        <ChannelList />
        <UserInfo />
        <ChannelData />
        <UserList />
      </ThemeProvider>
    </Grid>
  );
};

export default Layout;
