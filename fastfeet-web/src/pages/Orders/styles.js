import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 85%;
  margin: 0 auto;

  h2 {
    margin-top: 24px;
    color: #2e2e2e;
    font-size: 25px;
  }
`;

export const DeliverymanInfo = styled.div`
  display: flex;
  align-items: center;

  img,
  span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 4px;
  }

  span {
    text-transform: uppercase;
    display: flex;
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    align-items: center;
    justify-content: center;

    &.cancelada {
      background: ${lighten(0.2, '#f04c3a')};
    }

    &.entregue {
      background: ${lighten(0.2, '#469250')};
    }

    &.retirada {
      background: ${lighten(0.2, '#499abb')};
    }

    &.pendente {
      background: ${lighten(0.2, '#a0a42a')};
    }
  }
`;
