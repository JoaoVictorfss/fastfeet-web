import React from 'react';

import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import { WrapperView, Container, Content } from './styles';

export default function order({ setView, order }) {
  return (
    <WrapperView>
      <Container>
        <MdClose size={20} onClick={() => setView()} />
        <Content>
          <ul>
            <li>
              <strong>Informações sobre a encomenda</strong>
            </li>
            <li>
              {order.recipient.street}, {order.recipient.number}
            </li>
            <li>
              {order.recipient.city}-{order.recipient.state}
            </li>
            <li>{order.recipient.zip_code}</li>
          </ul>
          <ul>
            <li>
              <strong>Datas</strong>
            </li>
            <li>
              <strong>Retirada</strong>: {order.start_at}
            </li>
            <li>
              <strong>Entrega</strong>: {order.end_at}
            </li>
          </ul>
          <ul>
            <li>
              <strong>Assinatura do destinatário</strong>
            </li>
          </ul>
        </Content>
      </Container>
    </WrapperView>
  );
}

order.propTypes = {
  setView: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
};
