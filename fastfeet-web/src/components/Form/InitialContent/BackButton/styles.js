import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 112px;
    background: #cccccc;
    color: #fff;
    border: 0;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#CCCCCC')};
    }

    svg {
      margin-right: 4px;
      color: #fff;
    }

    strong {
      color: #fff;
      font-size: 14px;
      margin: 0 5px 0 0;
    }
  }
`;
