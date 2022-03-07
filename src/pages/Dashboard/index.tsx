import React, { useContext, useEffect, useState } from 'react';

import Header from '../../components/Header';
import { useTheme } from '../../contexts/Theme.context';
import { ThemeContext } from 'styled-components';

import { Content, Main, Section, TextSection } from './styles';
import { BigCardTwitter } from '../../components/Cards/BigCardTwitter';
import { BigCardFacebook } from '../../components/Cards/BigCardFacebook';
import { BigCardInstagram } from '../../components/Cards/BigCardInstagram';
import { BigCardYoutube } from '../../components/Cards/BigCardYoutube';
import SwitchReact from 'react-switch';
import { TextH1 } from '../../components/Header/styles';
import { SmallCard } from '../../components/Cards/SmallCard';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { toggleTheme } = useTheme();
  const { name: theme } = useContext(ThemeContext);
  const [switchState, setSwitchState] = useState(theme);
  const [checked, setChecked] = useState(false);

  const handleToggleTheme = () => {
    toggleTheme();
    setSwitchState(theme);
    setChecked(!checked);
  };

  useEffect(() => {
    setSwitchState(theme);
  }, [theme]);

  return (
    <Content>
      <Header nrFollowers={23}>
        <span>Dark Mode </span>

        <SwitchReact
          checkedIcon={false}
          checked={checked}
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
      <TextSection>
        <TextH1>Overview - Today</TextH1>
      </TextSection>

      <Section>
        <SmallCard
          social='twitter'
          followersToday={'45k'}
          percent='12%'
          icon='down'
          information='Page Views'
        />
        <SmallCard
          social='twitter'
          followersToday={'45k'}
          percent='12%'
          icon='down'
          information='Page Views'
        />
        <SmallCard
          social='twitter'
          followersToday={'45k'}
          percent='12%'
          icon='down'
          information='Page Views'
        />
        <SmallCard
          social='twitter'
          followersToday={'45k'}
          percent='12%'
          icon='down'
          information='Page Views'
        />
        <SmallCard
          social='twitter'
          followersToday={'45k'}
          percent='12%'
          icon='down'
          information='Page Views'
        />
      </Section>
    </Content>
  );
};

export default Dashboard;
