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

export const BigCardInstagramStyled = styled.div`
  display: flex;
  /* border: 1px solid red; */
  flex-direction: column;
  @media (max-width: 640px) {
    flex: 1;
    width: 100%;
    /* min-width: 300px; */
    padding: 10px;
  }

  border-radius: 5px;
  padding-bottom: 20px;

  border-top: 5px solid;
  border-image: linear-gradient(
      97deg,
      rgba(253, 196, 104, 1) 0%,
      rgba(223, 73, 150, 1) 100%
    )
    1;

  background-color: ${(props: ThemeGlobalData) => props.theme.colors.cardColor};
  width: 280px;
  height: 260px;

  :hover {
    background-color: ${(props: ThemeGlobalData) =>
      props.theme.colors.activeCardColor};
  }
`;

export const InstagramSocialStyled = styled.div`
  display: flex;
  flex: 1;
  width: 100%;

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

export const InstagramNumberStyled = styled.p`
  font-size: 55px;
  font-family: 'Inter', sans-serif;
  color: ${(props: ThemeGlobalData) => props.theme.colors.white};
  font-weight: bolder;
  align-self: center;
`;
export const InstagramFollowersTextStyled = styled.p`
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  color: ${(props: ThemeGlobalData) => props.theme.colors.white};

  font-weight: 100;
  align-self: center;
  letter-spacing: 5px;
`;

export const InstagramRatingStyled = styled.div`
  display: flex;
  flex: 1;

  @media (min-width: 640px) {
    flex-direction: row;
  }
  @media (max-width: 639px) {
    flex-direction: column;
  }

  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 5px;
`;

export const InstagramRatingTextStyled = styled.p`
  font-weight: bold;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
`;

export const InstagramRatingText = ({ color, children }: any) => {
  return <InstagramRatingTextStyled>{children}</InstagramRatingTextStyled>;
};
