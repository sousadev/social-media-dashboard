import React, { useState } from 'react';

import Header from '../../components/Header';
import { useTheme } from '../../contexts/Theme.context';

import { Content, Main, Section, TextSection } from './styles';
import { BigCardTwitter } from '../../components/Cards/BigCardTwitter';
import { BigCardFacebook } from '../../components/Cards/BigCardFacebook';
import { BigCardInstagram } from '../../components/Cards/BigCardInstagram';
import { BigCardYoutube } from '../../components/Cards/BigCardYoutube';
import SwitchReact from 'react-switch';
import { TextH1, TextH1Overview } from '../../components/Header/styles';
import { SmallCard } from '../../components/Cards/SmallCard';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { toggleTheme } = useTheme();

  const [checked, setChecked] = useState(false);

  const handleToggleTheme = () => {
    toggleTheme();
    setChecked(!checked);
  };

  const facebookData = {
    username: '@nathanf',
    followers: 1987,
    nrFollow: 12,
  };
  const twitterData = {
    username: '@nathanf',
    followers: 1044,
    nrFollow: 99,
  };
  const instagramData = {
    username: '@realnathanf',
    followers: '11k',
    nrFollow: 1099,
  };
  const youtubeData = {
    username: 'Nathan F.',
    followers: 8239,
    nrFollow: 144,
  };

  const overviewData = [
    {
      information: 'Page View',
      social: 'facebook',
      follow: 87,
      percent: '3%',
      icon: 'up',
    },
    {
      information: 'Likes',
      social: 'facebook',
      follow: 52,
      percent: '3%',
      icon: 'down',
    },
    {
      information: 'Likes',
      social: 'instagram',
      follow: 5462,
      percent: '2257%',
      icon: 'up',
    },
    {
      information: 'Profile Views',
      social: 'instagram',
      follow: '52k',
      percent: '1375%',
      icon: 'up',
    },
    {
      information: 'Retweets',
      social: 'twitter',
      follow: 117,
      percent: '303%',
      icon: 'up',
    },
    {
      information: 'Likes',
      social: 'twitter',
      follow: 507,
      percent: '553%',
      icon: 'up',
    },
    {
      information: 'Likes',
      social: 'youtube',
      follow: 107,
      percent: '19%',
      icon: 'down',
    },
    {
      information: 'Total Views',
      social: 'youtube',
      follow: 1407,
      percent: '12%',
      icon: 'down',
    },
  ];

  return (
    <Content>
      <Header nrFollowers={'23,004'}>
        <span>Dark Mode </span>

        <SwitchReact
          checkedIcon={false}
          uncheckedIcon={false}
          checked={checked}
          onChange={handleToggleTheme}
        />
      </Header>

      <Main>
        <BigCardFacebook
          followersToday={facebookData.nrFollow}
          nrFollowers={facebookData.followers}
          username={facebookData.username}
          icon='down'
        />
        <BigCardTwitter
          followersToday={twitterData.nrFollow}
          nrFollowers={twitterData.followers}
          username={twitterData.username}
          icon='up'
        />

        <BigCardInstagram
          followersToday={instagramData.nrFollow}
          nrFollowers={instagramData.followers}
          username={instagramData.username}
          icon='up'
        />

        <BigCardYoutube
          followersToday={youtubeData.nrFollow}
          nrFollowers={youtubeData.followers}
          username={youtubeData.username}
          icon='down'
        />
      </Main>
      <TextSection>
        <TextH1Overview>Overview - Today</TextH1Overview>
      </TextSection>

      <Section>
        {overviewData.map((i) => (
          <SmallCard
            social={i.social}
            followersToday={i.follow}
            percent={i.percent}
            icon={i.icon}
            information={i.information}
          />
        ))}
      </Section>
    </Content>
  );
};

export default Dashboard;
