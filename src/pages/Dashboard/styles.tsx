import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  overflow: hidden;

  margin: 20px auto 0;
`;

export const Main = styled.div`
  display: flex;
  flex: 1;

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
