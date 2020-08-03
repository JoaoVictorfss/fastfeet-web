import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 112px;
    height: 36px;
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#7159c1')};
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
