import styled from 'styled-components';
import { ThemeGlobalData } from '../../../contexts/Theme.context';

export const SmallCardStyled = styled.div`
  display: flex;
  /* border: 1px solid red; */
  border-radius: 5px;

  background-color: ${(props: ThemeGlobalData) => props.theme.colors.cardColor};
  width: 280px;
  height: 140px;
  flex-direction: column;

  padding: 20px;

  :hover {
    background-color: ${(props: ThemeGlobalData) =>
      props.theme.colors.activeCardColor};
  }
`;

export const SmallCardTop = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  p {
    color: ${(props: ThemeGlobalData) => props.theme.colors.gray};
    font-weight: 700;
    font-size: 14px;
    font-family: 'Inter';
    margin-left: 5px;
  }
`;

export const SmallCardBottom = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  span {
    font-family: 'Inter', sans-serif;
    font-size: 30px;
    font-weight: 700;
    color: ${(props: ThemeGlobalData) => props.theme.colors.white};
  }
`;
