import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 0 24px;
  overflow: hidden;

  margin: 20px auto 0;
`;

export const Main = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  @media (min-width: 641px) {
    flex-direction: row;
    padding-top: 30px;
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
    flex: 1;
    width: 100%;
    padding: 40px;
  }
  gap: 30px;
`;

export const Section = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin-bottom: 20px;
  overflow: hidden;
  @media (min-width: 641px) {
    flex-direction: row;
    padding-top: 30px;
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
    flex: 1;
    width: 100%;
    padding: 40px;
  }
  gap: 30px;
`;

export const TextSection = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
`;
