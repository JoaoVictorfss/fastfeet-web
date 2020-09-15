import styled from 'styled-components';

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  justify-content: space-between;
  width: 48%;

  div {
    padding: 2px;
  }

  strong {
    color: #2e2e2e;
    display: flex;
    font-weight: bold;
    font-size: 14px;
    font-family: sans-serif;
    margin-bottom: 4px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
