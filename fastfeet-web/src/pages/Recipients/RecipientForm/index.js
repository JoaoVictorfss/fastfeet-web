import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import history from '~/services/history';

import { Container, InitialContent, FormArea, Input } from '~components/Form';
import { InputContainer1, InputContainer2 } from './styles';

export default function OrderForm() {
  const { id } = useParams();
  const formRef = useRef(null);
  const [title, setTitle] = useState('Cadastro de distinatário');

  useEffect(() => {
    if (id) setTitle('Edição de destinatário');
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
        zipCode: Yup.string().required('Campo obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      history.goBack();
      toast.success('Salvo');
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      } else {
        toast.error('Algo deu errado ao salvar o destinatário');
      }
    }
  }
  return (
    <Container>
      <InitialContent
        onClick={() => formRef.current.submitForm()}
        title={title}
      />

      <FormArea onSubmit={handleSubmit} ref={formRef}>
        <Input
          name="name"
          type="text"
          label="Nome"
          placeholder="Ludwing van Beethoven"
        />
        <InputContainer1>
          <Input
            name="street"
            label="Rua"
            type="text"
            placeholder="Rua Beethoven"
          />
          <Input name="number" label="Número" type="text" placeholder="1729" />
          <Input name="complement" label="Complemento" type="text" />
        </InputContainer1>
        <InputContainer2>
          <Input name="city" label="Cidade" type="text" placeholder="Diadema" />
          <Input
            name="state"
            label="Estado"
            type="text"
            placeholder="São Paulo"
          />
          <Input
            name="zipCode"
            label="Cep"
            type="text"
            placeholder="09960-580"
          />
        </InputContainer2>
      </FormArea>
    </Container>
  );
}
