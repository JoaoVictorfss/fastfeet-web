import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7159c1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 60px 35px;
  margin: 80px auto;
  text-align: center;

  img {
    margin-bottom: 15px;
  }

  strong {
    display: flex;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 13px;
    font-family: sans-serif;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border: 1px solid #e5e8e8;
      box-shadow: 2px rgb(0, 0, 0, 0.2);
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 20px;

      &::placeholder {
        color: #abb2b9;
      }
    }

    /**validation errors */
    span {
      color: red;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      font-size: small;
    }

    button {
      height: 40px;
      background: #7159c1;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;
