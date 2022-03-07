import React from 'react';
import {
  BigCardTwitterStyled,
  TwitterFollowersTextStyled,
  TwitterNumberStyled,
  TwitterRatingStyled,
  TwitterSocialStyled,
} from './styles';

import './style.css';

import iconTwitter from '../../../assets/icon-twitter.svg';
import iconDown from '../../../assets/icon-down.svg';
import iconUp from '../../../assets/icon-up.svg';

// import { Container } from './styles';

interface BigCardTwitterProps {
  icon: string;
  username: string;
  nrFollowers: number;
  followersToday: number;
}

export const BigCardTwitter: React.FC<BigCardTwitterProps> = ({
  icon,
  username,
  nrFollowers,
  followersToday,
}) => {
  const iconElement = icon === 'down' ? iconDown : iconUp;
  const ratingColor = icon !== 'down' ? 'textGreen' : 'textRed';
  return (
    <BigCardTwitterStyled>
      <TwitterSocialStyled>
        <img src={iconTwitter} width={25} height={20} alt='twitter' />
        <p>{username}</p>
      </TwitterSocialStyled>
      <TwitterNumberStyled>{nrFollowers}</TwitterNumberStyled>
      <TwitterFollowersTextStyled>FOLLOWERS</TwitterFollowersTextStyled>
      <TwitterRatingStyled color={ratingColor}>
        <img src={iconElement} width={12} height={6} alt='icon' />
        <p className={ratingColor}>{followersToday} Today</p>
      </TwitterRatingStyled>
    </BigCardTwitterStyled>
  );
};
