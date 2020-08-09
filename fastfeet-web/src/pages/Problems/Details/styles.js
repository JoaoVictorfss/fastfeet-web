import styled from 'styled-components';
import { darken } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';

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
  top: 27%;
  position: absolute;
  width: 350px;
  height: 350px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 1px 1px rgba(240, 236, 236, 0.767);
  overflow: auto;

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

  p {
    margin-top: 4px;
    color: #909090;
  }

  strong {
    color: #666666;
  }
`;
