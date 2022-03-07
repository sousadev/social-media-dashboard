import React, { useContext, useEffect, useState } from 'react';

import Header from '../../components/Header';
import { useTheme } from '../../contexts/Theme.context';
import Switch from 'react-input-switch';
import { ThemeContext } from 'styled-components';
import Toggle from '../../components/Toggle/Toggle';
import { Content, Main } from './styles';
import { BigCardTwitter } from '../../components/Cards/BigCardTwitter';
import { BigCardFacebook } from '../../components/Cards/BigCardFacebook';
import { BigCardInstagram } from '../../components/Cards/BigCardInstagram';
import { BigCardYoutube } from '../../components/Cards/BigCardYoutube';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { toggleTheme } = useTheme();
  const { name: theme } = useContext(ThemeContext);
  const [switchState, setSwitchState] = useState(theme);

  const handleToggleTheme = () => {
    toggleTheme();
    setSwitchState(theme);
  };

  useEffect(() => {
    setSwitchState(theme);
  }, [theme]);

  return (
    <Content>
      <Header nrFollowers={23}>
        <span>Dark Mode </span>

        <Switch
          value={switchState}
          on={'light'}
          off={'dark'}
          styles={{
            backgroundColor:
              'linear-gradient(97deg, rgba(34,97,195,1) 0%, rgba(45,253,170,1) 100%)',
          }}
          onChange={handleToggleTheme}
        />
      </Header>

      <Main>
        <BigCardTwitter
          followersToday={12}
          nrFollowers={3444}
          username='@sousadev'
          icon='down'
        />
        <BigCardFacebook
          followersToday={34}
          nrFollowers={340}
          username='@sousadev'
          icon='up'
        />

        <BigCardInstagram
          followersToday={10}
          nrFollowers={4455}
          username='@sousadev'
          icon='up'
        />

        <BigCardYoutube
          followersToday={34}
          nrFollowers={2340}
          username='@italo'
          icon='down'
        />
      </Main>

      {/* <button onClick={handleToggleTheme}>Texto</button> */}
    </Content>
  );
};

export default Dashboard;
