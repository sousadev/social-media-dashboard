import styled from 'styled-components';
import { ThemeGlobalData } from '../../contexts/Theme.context';

export const HeaderStyled = styled.header`
  display: flex;
  flex: 1;
  width: 100%;
  @media (min-width: 640px) {
    flex-direction: row;
  }
  @media (max-width: 639px) {
    flex-direction: column;
  }

  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-around;
  align-items: center;

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
  align-items: auto;
  flex-direction: column;

  p {
    color: ${(props: ThemeGlobalData) => props.theme.colors.gray};
    font-weight: 600;
    font-size: 12px;
  }
`;

export const TextH1 = styled.h1`
  display: flex;
  flex: 1;
  align-self: auto;
  margin: 0;
`;

export const HeaderChildrenBoxStyled = styled.div``;
