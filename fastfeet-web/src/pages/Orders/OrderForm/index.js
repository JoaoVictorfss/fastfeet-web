import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import Select from 'react-select';

import api from '~/services/api';

import history from '~/services/history';

import { Container, InitialContent, FormArea, Input } from '~components/Form';
import { Options, SelectContainer } from './styles';

export default function OrderForm() {
  const [title, setTitle] = useState('Cadastro de encomendas');
  const [deliverymen, setDeliverymen] = useState([]);
  const [recipients, setRecipients] = useState([]);

  // options selected
  const [recipient, setRecipient] = useState({});
  const [deliveryman, setDeliveryman] = useState({});

  const [product, setProduct] = useState('Digite o nome do produto');

  const formRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadOptions() {
      function formatOptions(el) {
        return {
          value: el.id,
          label: el.name,
        };
      }
      // load deliverymen
      const res_deliverymen = await api.get('/deliveryman');
      const deliverymen_data = res_deliverymen.data.map(formatOptions);
      setDeliverymen(deliverymen_data);
      // default deliveryman
      setDeliveryman(deliverymen_data[0]);

      // load recipients
      const res_recipients = await api.get('/recipients');
      const recipients_data = res_recipients.data.map(formatOptions);
      setRecipients(recipients_data);
      // default recipient
      setRecipient(recipients_data[0]);
    }

    // load order datas
    async function loadOrderInfo() {
      const { data } = await api.get(`/orders/${id}`);
      setProduct(data.product);
      setRecipient({
        value: data.recipient.id,
        label: data.recipient.name,
      });
      setDeliveryman({
        value: data.deliveryman.id,
        label: data.deliveryman.name,
      });
    }

    loadOptions();

    if (id) {
      setTitle('Edição de encomendas');
      loadOrderInfo();
    }
  }, [id]);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      // validation
      const schema = Yup.object().shape({
        product: Yup.string().required('Campo obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      // object for request
      data = {
        ...data,
        deliveryman_id: deliveryman.value,
        recipient_id: recipient.value,
      };

      if (id) {
        await api.put(`/orders/${id}`, data);
        toast.success('Pedido atualizado com sucesso');
      } else {
        await api.post('/orders', data);
        toast.success('Pedido criado com sucesso');
      }

      history.goBack();
    } catch (err) {
      const validationErrors = {};

      // validation error
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      } else {
        // error server
        toast.error('Erro ao salvar o pedido');
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
          <Options>
            <strong>Destinatário</strong>
            <Select
              options={recipients}
              placeholder="Selecione o destinatário"
              onChange={setRecipient}
              value={recipient}
            />
          </Options>
          <Options>
            <strong>Entregador</strong>
            <Select
              options={deliverymen}
              placeholder="Selecione o entregador"
              onChange={setDeliveryman}
              value={deliveryman}
            />
          </Options>
        </SelectContainer>
        <Input
          name="product"
          type="text"
          label="Nome do Produto"
          placeholder={product}
        />
      </FormArea>
    </Container>
  );
}
