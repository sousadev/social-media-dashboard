import React from 'react';
import { SmallCardBottom, SmallCardStyled, SmallCardTop } from './styles';

import iconFacebook from '../../../assets/icon-facebook.svg';
import iconInstagram from '../../../assets/icon-instagram.svg';
import iconYoutube from '../../../assets/icon-youtube.svg';
import iconTwitter from '../../../assets/icon-twitter.svg';
import iconDown from '../../../assets/icon-down.svg';
import iconUp from '../../../assets/icon-up.svg';

import './style.css';

// import { Container } from './styles';

interface SmallCardProps {
  icon: string;
  information: string;
  social: string;
  followersToday: number | string;
  percent: string;
}

export const SmallCard: React.FC<SmallCardProps> = ({
  icon,
  social,
  followersToday,
  percent,
  information,
}) => {
  let iconSocial;

  switch (social) {
    case 'twitter':
      iconSocial = iconTwitter;
      break;
    case 'facebook':
      iconSocial = iconFacebook;
      break;
    case 'youtube':
      iconSocial = iconYoutube;
      break;
    case 'instagram':
      iconSocial = iconInstagram;
      break;

    default:
      break;
  }

  const iconElement = icon === 'down' ? iconDown : iconUp;
  const ratingColor = icon !== 'down' ? 'textGreen' : 'textRed';
  return (
    <SmallCardStyled>
      <SmallCardTop>
        <p>{information}</p>
        <img src={iconSocial} width={20} height={20} alt='social' />
      </SmallCardTop>
      <SmallCardBottom>
        <span>{followersToday}</span>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <img src={iconElement} width={12} height={8} alt='icon' />
          <p className={ratingColor}>{percent}</p>
        </div>
      </SmallCardBottom>
    </SmallCardStyled>
  );
};
