import styled from 'styled-components';

const TableContainer = styled.table`
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
    height: 48px;
    padding: 0 18px;
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

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 600px;
    }
  }
`;

export default TableContainer;
