import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import history from '~/services/history';

import api from '~/services/api';

import AvatarInput from './AvatarInput';
import { Container, InitialContent, FormArea, Input } from '~components/Form';

export default function DeliverymanForm() {
  const [title, setTitle] = useState('Cadastro de entregadores');
  const [deliveryman, setDeliveryman] = useState({});
  const formRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadDeliveryman() {
      try {
        const { data } = await api.get(`deliveryman/${id}`);
        setDeliveryman(data);
      } catch (err) {
        toast.error('Falha ao carregar dados');
      }
    }
    if (id) {
      setTitle('Edição de entregadores');

      loadDeliveryman();
    }
  }, [id]);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string().email().required('Campo obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (id) {
        await api.put(`/deliveryman/${id}`, data);
        toast.success('Entregador atualizado com sucesso');
      } else {
        await api.post('/deliveryman', data);
        toast.success('Entregador criado com sucesso');
      }

      history.goBack();
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      } else {
        toast.error('Erro ao salvar o entregador');
      }
    }
  }
  return (
    <Container>
      <InitialContent
        onClick={() => formRef.current.submitForm()}
        title={title}
      />
      <FormArea onSubmit={handleSubmit} ref={formRef} initialData={deliveryman}>
        <AvatarInput name="avatar_id" />
        <Input
          name="name"
          type="text"
          label="Nome"
          placeholder="Nome completo"
        />
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="seu endereço de e-mail"
        />
      </FormArea>
    </Container>
  );
}
