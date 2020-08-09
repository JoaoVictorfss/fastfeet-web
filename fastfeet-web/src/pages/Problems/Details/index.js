import React from 'react';
import PropTypes from 'prop-types';

import { MdClose } from 'react-icons/md';
import { WrapperView, Container, Content } from './styles';

export default function Details({ setView }) {
  return (
    <WrapperView>
      <Container>
        <MdClose size={20} onClick={() => setView()} />
        <Content>
          <ul>
            <li>
              <strong>Informações sobre a encomenda</strong>
            </li>
            <li>Rua Beethoven, 1729</li>
            <li>Diadema-SP</li>
            <li>099660-580</li>
          </ul>
          <ul>
            <li>
              <strong>Datas</strong>
            </li>
            <li>
              <strong>Retirada</strong>: 25/01/2020
            </li>
            <li>
              <strong>Entrega</strong>: 25/01/2020
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

Details.propTypes = {
  setView: PropTypes.func.isRequired,
};
