import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import history from '~/services/history';

import { Container, InitialContent, FormArea, Input } from '~components/Form';
import { Select, SelectContainer } from './styles';

export default function OrderForm() {
  const { id } = useParams();
  const formRef = useRef(null);
  const [title, setTitle] = useState('Cadastro de encomendas');

  useEffect(() => {
    if (id) setTitle('Edição de encomendas');
  }, [id]);
  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        productName: Yup.string().required('Campo obrigatório'),
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
        <SelectContainer>
          <Select>
            <strong>Destinatário</strong>
            <select>
              <option value="Ludwig van Beethoven">Ludwig van Beethoven</option>
              <option value="João">João</option>
            </select>
          </Select>
          <Select>
            <strong>Entregador</strong>
            <select>
              <option value="Doe">Doe</option>
              <option value="Maria">Maria</option>
            </select>
          </Select>
        </SelectContainer>
        <Input
          name="productName"
          type="text"
          label="Nome do Produto"
          placeholder="Yamaha SX7"
        />
      </FormArea>
    </Container>
  );
}
