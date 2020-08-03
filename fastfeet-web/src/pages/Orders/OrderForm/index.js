import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BackButton from '~/components/BackButton';
import SaveButton from '~/components/SaveButton';

import { Container, InitialContent, Buttons } from './styles';

export default function OrderForm() {
  const { id } = useParams();

  function handleSave() {
    toast.success('Salvo');
  }
  return (
    <Container>
      <InitialContent>
        {id ? <h2>Edição de encomendas</h2> : <h2>Cadastro de encomendas</h2>}
        <Buttons>
          <BackButton />
          <SaveButton onClick={() => handleSave()} />
        </Buttons>
      </InitialContent>
    </Container>
  );
}
