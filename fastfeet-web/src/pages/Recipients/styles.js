import styled from 'styled-components';

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
    padding-left: 15px;
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
    padding: 10px 15px;
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
