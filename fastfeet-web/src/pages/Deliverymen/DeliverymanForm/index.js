import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import history from '~/services/history';

import AvatarInput from './AvatarInput';
import { Container, InitialContent, FormArea, Input } from '~components/Form';

export default function OrderForm() {
  const { id } = useParams();
  const formRef = useRef(null);
  const [title, setTitle] = useState('Cadastro de entregadores');

  useEffect(() => {
    if (id) setTitle('Edição de entregadores');
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
        toast.error('Algo deu errado ao salvar o entregador');
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
        <AvatarInput />
        <Input name="name" type="text" label="Nome" placeholder="John Doe" />
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="exemple@rocketseat.com"
        />
      </FormArea>
    </Container>
  );
}
