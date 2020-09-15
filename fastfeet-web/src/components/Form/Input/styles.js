import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  input {
    display: flex;
    border-radius: 4px;
    border: ${(props) =>
    props.error ? '1px solid #e5573d' : '1px solid #dddddd'};
    height: 40px;
    padding: 0px 12px;
    color: #444;
    font-size: 15px;

    &::placeholder {
      color: #abb2b9;
    }

    &:focus {
      background-color: #fff;
      border: 2px solid #2684ff;
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

  span {
    color: #e5573d;
    align-self: flex-start;
    margin-top: 3px;
    font-weight: bold;
    font-size: small;
  }
`;
