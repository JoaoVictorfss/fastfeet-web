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
          <strong>Visualizar Problema</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            asperiores accusantium laboriosam recusandae molestiae! Magnam
            ducimus quo nihil cumque sequi quia provident aliquam non Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            asperiores accusantium laboriosam recusandae molestiae! Magnam
            ducimus quo nihil cumque sequi quia provident aliquam non Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            asperiores accusantium laboriosam recusandae molestiae! Magnam
            ducimus quo nihil cumque sequi quia provident aliquam non Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            asperiores accusantium laboriosam recusandae molestiae! Magnam
            ducimus quo nihil cumque sequi quia provident aliquam non Lorem
            ipsum dolor sit amet consectetur adipisicing elit. DignissimosLorem
            ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            asperiores accusantium laboriosam recusandae molestiae! Magnam
            ducimus quo nihil cumque sequi quia provident aliquam non Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            asperiores accusantium laboriosam recusandae molestiae! Magnam
            ducimus quo nihil cumque sequi quia provident aliquam non Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          </p>
        </Content>
      </Container>
    </WrapperView>
  );
}

Details.propTypes = {
  setView: PropTypes.func.isRequired,
};
