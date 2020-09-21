import React from 'react';
import PropTypes from 'prop-types';

import { MdClose } from 'react-icons/md';
import { WrapperView, Container, Content } from './styles';

export default function Details({ setView, problem }) {
  return (
    <WrapperView>
      <Container>
        <MdClose size={20} onClick={() => setView()} />
        <Content>
          <strong>Visualizar Problema</strong>
          <p>{problem.description}</p>
        </Content>
      </Container>
    </WrapperView>
  );
}

Details.propTypes = {
  setView: PropTypes.func.isRequired,
  problem: PropTypes.object.isRequired,
};
