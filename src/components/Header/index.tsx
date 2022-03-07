import React from 'react';

import {
  HeaderChildrenBoxStyled,
  HeaderStyled,
  HeaderTextBoxStyled,
  TextH1,
} from './styles';

// import { Container } from './styles';

interface HeaderProps {
  children: any;
  nrFollowers: string;
}

const Header: React.FC<HeaderProps> = ({ children, nrFollowers }) => {
  return (
    <HeaderStyled>
      <HeaderTextBoxStyled>
        <TextH1>Social Media Dashboard</TextH1>
        <p>Total Followers: {nrFollowers}</p>
      </HeaderTextBoxStyled>

      <HeaderChildrenBoxStyled>{children}</HeaderChildrenBoxStyled>
    </HeaderStyled>
  );
};

export default Header;
