import styled from 'styled-components';

export const Container = styled.div`
  max-width: 62%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const InitialContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 15px;

  h2 {
    color: #2e2e2e;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 16px;
  }
`;
