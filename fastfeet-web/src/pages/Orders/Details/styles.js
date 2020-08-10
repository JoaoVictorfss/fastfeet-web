import styled from 'styled-components';
import { darken } from 'polished';

export const WrapperView = styled.div`
  top: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgb(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  top: 33%;
  z-index: 1;
  position: absolute;
  max-width: 350px;
  width: 100%;
  max-height: 280px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 1px 1px rgba(240, 236, 236, 0.767);

  svg {
    color: #666666;
    float: right;
    cursor: pointer;
    transition: color 0.4s;
    margin: 2px 8px;

    &:hover {
      color: ${darken(0.3, '#666666')};
      border-radius: 50%;
      background: #ccd1d1;
    }
  }
`;

export const Content = styled.div`
  padding: 24px;

  ul {
    padding: 0;
    margin: 0;
    border-bottom: 1px solid rgb(109, 107, 107, 0.2);
    margin-bottom: 8px;

    &:last-child {
      border-bottom: none;
    }

    li {
      margin-bottom: 8px;

      & ~ li {
        color: #909090;
      }

      &:first-child {
        font-size: 14px;

        strong {
          color: #2e2e2e;
        }
      }

      strong {
        color: #666666;
      }
    }
  }
`;
