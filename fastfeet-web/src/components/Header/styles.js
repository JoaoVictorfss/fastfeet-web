import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  border-bottom: 2px solid #ddd;
  margin-bottom: 30px;
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 62px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 135px;
      height: 25px;
      margin-top: 5px;
      margin-right: 25px;
    }
  }
`;

export const Navbar = styled.div`
  border-left: 1px solid #ddd;
  height: 32px;
  padding-left: 25px;
  display: flex;
  align-items: center;

  a {
    margin-right: 20px;
    color: #999;
    font-weight: bold;
    letter-spacing: -0.05em;
    font-size: 16px;
    transition: color 0.2s;
    text-transform: uppercase;

    &.selected {
      color: ${darken(0.5, '#999')};
    }
  }
`;

export const LogOut = styled.div`
  display: flex;
  flex-direction: column;

  strong,
  button {
    text-align: right;
  }

  strong {
    margin-top: 0px;
    color: #666666;
    font-size: 14px;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    margin-top: 5px;
    color: #de3b3b;
    font-size: 13px;

    &:hover {
      color: ${darken(0.14, '#de3b3b')};
    }
  }
`;
