import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 30px;
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  background: #fff;
  border: 1px solid #ded9d9;
  border-radius: 5px;
  padding: 8px;

  svg {
    color: #666;
  }

  input {
    margin-left: 4px;
    border: none;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 4px 10px;
  background: #7159c1;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: ${darken(0.06, '#7159c1')};
  }
`;
