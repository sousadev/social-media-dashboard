import React from 'react';
import {
  BigCardFacebookStyled,
  FacebookFollowersTextStyled,
  FacebookNumberStyled,
  FacebookRatingStyled,
  FacebookSocialStyled,
} from './styles';

import './style.css';

import iconFacebook from '../../../assets/icon-facebook.svg';
import iconDown from '../../../assets/icon-down.svg';
import iconUp from '../../../assets/icon-up.svg';

// import { Container } from './styles';

interface BigCardFacebookProps {
  icon: string;
  username: string;
  nrFollowers: number;
  followersToday: number;
}

export const BigCardFacebook: React.FC<BigCardFacebookProps> = ({
  icon,
  username,
  nrFollowers,
  followersToday,
}) => {
  const iconElement = icon === 'down' ? iconDown : iconUp;
  const ratingColor = icon !== 'down' ? 'textGreen' : 'textRed';
  return (
    <BigCardFacebookStyled>
      <FacebookSocialStyled>
        <img src={iconFacebook} width={20} height={20} alt='Facebook' />
        <p>{username}</p>
      </FacebookSocialStyled>
      <FacebookNumberStyled>{nrFollowers}</FacebookNumberStyled>
      <FacebookFollowersTextStyled>FOLLOWERS</FacebookFollowersTextStyled>
      <FacebookRatingStyled color={ratingColor}>
        <img src={iconElement} width={12} height={6} alt='icon' />
        <p className={ratingColor}>{followersToday} Today</p>
      </FacebookRatingStyled>
    </BigCardFacebookStyled>
  );
};
