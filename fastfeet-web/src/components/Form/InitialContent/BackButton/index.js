import React from 'react';
import { MdChevronLeft } from 'react-icons/md';

import history from '~/services/history';

import { Container } from './styles';

export default function BackButton() {
  return (
    <Container>
      <button
        type="button"
        onClick={() => {
          history.goBack();
        }}
      >
        <MdChevronLeft size={22} />
        <strong>VOLTAR</strong>
      </button>
    </Container>
  );
}
