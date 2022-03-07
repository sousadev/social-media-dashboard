import React from 'react';
import {
  BigCardInstagramStyled,
  InstagramFollowersTextStyled,
  InstagramNumberStyled,
  InstagramRatingStyled,
  InstagramSocialStyled,
} from './styles';

import './style.css';

import iconInstagram from '../../../assets/icon-instagram.svg';
import iconDown from '../../../assets/icon-down.svg';
import iconUp from '../../../assets/icon-up.svg';

// import { Container } from './styles';

interface BigCardInstagramProps {
  icon: string;
  username: string;
  nrFollowers: number | string;
  followersToday: number;
}

export const BigCardInstagram: React.FC<BigCardInstagramProps> = ({
  icon,
  username,
  nrFollowers,
  followersToday,
}) => {
  const iconElement = icon === 'down' ? iconDown : iconUp;
  const ratingColor = icon !== 'down' ? 'textGreen' : 'textRed';
  return (
    <BigCardInstagramStyled>
      <InstagramSocialStyled>
        <img src={iconInstagram} width={20} height={20} alt='Instagram' />
        <p>{username}</p>
      </InstagramSocialStyled>
      <InstagramNumberStyled>{nrFollowers}</InstagramNumberStyled>
      <InstagramFollowersTextStyled>FOLLOWERS</InstagramFollowersTextStyled>
      <InstagramRatingStyled color={ratingColor}>
        <img src={iconElement} width={12} height={6} alt='icon' />
        <p className={ratingColor}>{followersToday} Today</p>
      </InstagramRatingStyled>
    </BigCardInstagramStyled>
  );
};
