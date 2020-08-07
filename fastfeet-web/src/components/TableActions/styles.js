import styled from 'styled-components';

export const Content = styled.ul`
  z-index: 1;
  position: absolute;
  padding: 12px 6px;
  width: 140px;
  border-radius: 5px;
  background-color: #fff;
  left: calc(85% + 2px);
  box-shadow: 0px 0px 1px 1px rgb(109, 107, 107, 0.2);

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 7px);
    top: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid rgb(109, 107, 107, 0.2);
  }
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  color: #909090;
  padding: 8px 4px;
  text-align: left;
  border-bottom: 1px solid rgb(109, 107, 107, 0.2);
  cursor: pointer;
  transition: color 0.4s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: black;
  }

  svg {
    margin-right: 6px;
    font-size: 15px;
  }
`;
