import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import history from '~/services/history';

import api from '~/services/api';

import { Container, InitialContent, FormArea, Input } from '~components/Form';
import { InputContainer1, InputContainer2 } from './styles';

export default function RecipientForm() {
  const [title, setTitle] = useState('Cadastro de distinatário');
  const [recipient, setRecipient] = useState({});
  const formRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadRecipient() {
      try {
        const { data } = await api.get(`recipients/${id}`);
        setRecipient(data);
      } catch (err) {
        toast.error('Falha ao carregar dados');
      }
    }
    if (id) {
      setTitle('Edição de entregadores');
      loadRecipient();
    }
  }, [id]);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        street: Yup.string().required('Campo obrigatório'),
        number: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Campo obrigatório'),
        state: Yup.string().required('Campo obrigatório'),
        zip_code: Yup.string().required('Campo obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (id) {
        await api.put(`/recipients/${id}`, data);
        toast.success('Destinatário atualizado com sucesso');
      } else {
        await api.post('/recipients', data);

        toast.success('Destinatário criado com sucesso');
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
        toast.error('Erro ao salvar o destinatário');
      }
    }
  }
  return (
    <Container>
      <InitialContent
        onClick={() => formRef.current.submitForm()}
        title={title}
      />

      <FormArea onSubmit={handleSubmit} ref={formRef} initialData={recipient}>
        <Input
          name="name"
          type="text"
          label="Nome"
          placeholder="Nome do distário"
        />
        <InputContainer1>
          <Input name="street" label="Rua" type="text" placeholder="Rua" />
          <Input
            name="number"
            label="Número"
            type="text"
            placeholder="Número da residência"
          />
          <Input name="complement" label="Complemento" type="text" />
        </InputContainer1>
        <InputContainer2>
          <Input
            name="city"
            label="Cidade"
            type="text"
            placeholder="Cidade do destinatário"
          />
          <Input
            name="state"
            label="Estado"
            type="text"
            placeholder="Estado do destinatário"
          />
          <Input
            name="zip_code"
            label="Cep"
            type="text"
            placeholder="CEP do destinatário"
          />
        </InputContainer2>
      </FormArea>
    </Container>
  );
}
