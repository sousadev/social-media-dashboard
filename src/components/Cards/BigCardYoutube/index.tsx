import React from 'react';
import {
  BigCardYoutubeStyled,
  YoutubeFollowersTextStyled,
  YoutubeNumberStyled,
  YoutubeRatingStyled,
  YoutubeSocialStyled,
} from './styles';

import './style.css';

import iconYoutube from '../../../assets/icon-youtube.svg';
import iconDown from '../../../assets/icon-down.svg';
import iconUp from '../../../assets/icon-up.svg';

// import { Container } from './styles';

interface BigCardYoutubeProps {
  icon: string;
  username: string;
  nrFollowers: number;
  followersToday: number;
}

export const BigCardYoutube: React.FC<BigCardYoutubeProps> = ({
  icon,
  username,
  nrFollowers,
  followersToday,
}) => {
  const iconElement = icon === 'down' ? iconDown : iconUp;
  const ratingColor = icon !== 'down' ? 'textGreen' : 'textRed';
  return (
    <BigCardYoutubeStyled>
      <YoutubeSocialStyled>
        <img src={iconYoutube} width={20} height={20} alt='Youtube' />
        <p>{username}</p>
      </YoutubeSocialStyled>
      <YoutubeNumberStyled>{nrFollowers}</YoutubeNumberStyled>
      <YoutubeFollowersTextStyled>FOLLOWERS</YoutubeFollowersTextStyled>
      <YoutubeRatingStyled color={ratingColor}>
        <img src={iconElement} width={12} height={6} alt='icon' />
        <p className={ratingColor}>{followersToday} Today</p>
      </YoutubeRatingStyled>
    </BigCardYoutubeStyled>
  );
};
