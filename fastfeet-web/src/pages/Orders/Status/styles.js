import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  max-width: 120px;
  padding: 4px 6px;
  border-radius: 50px;

  strong {
    margin-left: 4px;
    font-size: 14px;
  }

  &.Pending {
    background: ${lighten(0.5, '#a0a42a')};
    color: #a0a42a;

    div {
      background: #a0a42a;
    }
  }

  &.Delivered {
    background: ${lighten(0.5, '#469250')};
    color: #469250;

    div {
      background: #469250;
    }
  }

  &.Withdrawn {
    background: ${lighten(0.3, '#499abb')};
    color: #499abb;

    div {
      background: #499abb;
    }
  }

  &.Canceled {
    background: ${lighten(0.3, '#f04c3a')};
    color: #f04c3a;

    div {
      background: #f04c3a;
    }
  }
`;

export const Badge = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
