import styled from 'styled-components';
import { ThemeGlobalData } from '../../contexts/Theme.context';

export const HeaderStyled = styled.header`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-around;

  align-items: left;
  @media (min-width: 641px) {
    flex-direction: row;
    padding: 10px;
    margin-left: 20px;
    margin-right: 20px;
    align-items: center;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    align-content: left;
    justify-content: space-between;
    flex: 1;
    width: 100%;
  }

  justify-content: space-around;

  p {
    color: ${(props: ThemeGlobalData) => props.theme.colors.gray};
    font-weight: 600;
    font-size: 12px;
  }

  /* height: 120px; */
`;

export const HeaderTextBoxStyled = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: left;
  flex-direction: column;

  p {
    color: ${(props: ThemeGlobalData) => props.theme.colors.gray};
    font-weight: 600;
    font-size: 12px;
  }
`;

export const TextH1 = styled.h1`
  display: flex;
  /* flex: 1; */
  font-size: 3.3rem;
  align-self: left;
  @media (max-width: 640px) {
    font-size: 24px;
    align-self: left;
  }
  margin: 0;
`;

export const HeaderChildrenBoxStyled = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 640px) {
    justify-content: space-between;
    flex: 1;
    width: 100%;
  }
  gap: 0.5rem;
  span {
    color: ${(props: ThemeGlobalData) => props.theme.colors.gray};
    font-weight: 700;
    font-size: 12px;
    font-family: 'Inter';
    margin-left: 5px;
  }
`;
