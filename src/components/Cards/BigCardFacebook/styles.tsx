import styled from 'styled-components';
import { ThemeGlobalData } from '../../../contexts/Theme.context';

export const BigCardStyled = styled.div`
  display: flex;
  /* border: 1px solid red; */
  border-radius: 5px;
  background-color: ${(props: ThemeGlobalData) => props.theme.colors.cardColor};
  width: 280px;
  height: 260px;

  :hover {
    background-color: ${(props: ThemeGlobalData) =>
      props.theme.colors.activeCardColor};
  }
`;

export const BigCardFacebookStyled = styled.div`
  display: flex;
  flex: 1;
  /* border: 1px solid red; */
  flex-direction: column;
  @media (max-width: 640px) {
    flex: 1;
    width: 100%;
    padding: 20px;
  }

  border-radius: 5px;
  padding-bottom: 20px;
  border-top: 5px solid
    ${(props: ThemeGlobalData) => props.theme.colors.facebook};
  background-color: ${(props: ThemeGlobalData) => props.theme.colors.cardColor};
  min-width: 280px;
  width: 280px;
  height: 260px;

  :hover {
    background-color: ${(props: ThemeGlobalData) =>
      props.theme.colors.activeCardColor};
  }
`;

export const FacebookSocialStyled = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;
  align-content: center;

  p {
    color: ${(props: ThemeGlobalData) => props.theme.colors.gray};
    font-weight: 700;
    font-size: 12px;
    font-family: 'Inter';
    margin-left: 5px;
  }
`;

export const FacebookNumberStyled = styled.p`
  font-size: 55px;
  font-family: 'Inter', sans-serif;
  color: ${(props: ThemeGlobalData) => props.theme.colors.white};
  font-weight: bolder;
  align-self: center;
`;
export const FacebookFollowersTextStyled = styled.p`
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  color: ${(props: ThemeGlobalData) => props.theme.colors.white};

  font-weight: 100;
  align-self: center;
  letter-spacing: 5px;
`;

export const FacebookRatingStyled = styled.div`
  display: flex;
  flex: 1;

  padding-top: 10px;
  padding-bottom: 10px;

  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 5px;
`;

export const FacebookRatingTextStyled = styled.p`
  font-weight: bold;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
`;

export const FacebookRatingText = ({ color, children }: any) => {
  return (
    <FacebookRatingTextStyled color='red'>{children}</FacebookRatingTextStyled>
  );
};
