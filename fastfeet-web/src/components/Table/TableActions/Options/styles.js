import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: ${(props) => (props.problem ? '-83px' : '-58px')};
  width: ${(props) => (props.problem ? '190px' : '140px')};
  z-index: 1;
  margin-top: 5px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 1px 1px rgb(109, 107, 107, 0.2);

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 6px);
    top: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid rgb(109, 107, 107, 0.2);
  }

  ul {
    padding: 10px 8px;
  }
`;

export const Option = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid rgb(109, 107, 107, 0.2);
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

export const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  color: #909090;
  background-color: #fff;
  transition: color 0.4s;
  font-size: 15px;

  &:hover {
    color: black;
  }

  svg {
    margin-right: 8px;
    font-size: 15px;
  }
`;
