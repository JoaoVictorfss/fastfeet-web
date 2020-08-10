import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: top;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 20px;

  h2 {
    color: #2e2e2e;
    font-size: 26px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 16px;
  }
`;
