import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 85%;
  margin: 0 auto;

  h2 {
    margin-top: 30px;
    color: #2e2e2e;
    font-size: 28px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 13px;

  thead th {
    text-align: left;
    padding-left: 18px;
    color: #2e2e2e;

    &:last-child {
      text-align: right;
      padding-right: 14px;
    }
  }

  tbody {
    background: #fff;
  }

  tbody td {
    padding: 10px 18px;
    color: #525050;

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      text-align: right;
    }
  }
`;

export const WrapperView = styled.div`
  top: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgb(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
`;

export const PreviewContainer = styled.div`
  top: 33%;
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

export const PreviewContent = styled.div`
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
        color: #2e2e2e;
        font-size: 14px;
      }
    }

    strong {
      color: #666666;
    }
  }
`;
