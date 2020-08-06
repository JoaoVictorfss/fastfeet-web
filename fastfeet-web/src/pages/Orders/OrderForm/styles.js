import styled from 'styled-components';

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  select {
    display: flex;
    border-radius: 4px;
    border: 1px solid #dddddd;
    height: 40px;
    padding: 0px 12px;
    color: #abb2b9;
    font-size: 15px;
    background-color: #fff;

    &:focus {
      color: #444;
      border: 1px solid #3498db;
    }
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

  div {
    width: 48%;
  }
`;
