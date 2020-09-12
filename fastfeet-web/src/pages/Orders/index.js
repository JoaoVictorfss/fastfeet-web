import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import ActionsPanel from '~/components/ActionsPanel';
import { TableContainer, TableActions } from '~components/Table';
import Details from './Details';
import Status from './Status';
import { Container, DeliverymanInfo } from './styles';

export default function Orders() {
  const [actionAvailable, setActionAvailable] = useState(true);
  const [view, setView] = useState(false);
  const [orders, setOrders] = useState([]);
  const [previousOrders, setPreviousOrders] = useState([]);

  function handleFormat(e) {
    const [first, second] = e.deliveryman.name.split(' ');
    let word = first[0];

    if (second) {
      word += second[0];
    }

    e.deliveryman.word = word;
    if (e.start_at !== null) e.status = 'retirada';
    if (e.end_at !== null) e.status = 'entregue';
    if (e.canceled_at !== null) e.status = 'cancelada';
    if (!e.status) e.status = 'pendente';
  }

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('orders');
      const { data } = response;

      data.forEach(handleFormat);

      setOrders(data);
      setPreviousOrders(data);
    }

    loadOrders();
  }, []);

  async function handleFilterChange(e) {
    if (e.target.value) {
      const response = await api.get(`/orders/${e.target.value}`);
      const { data } = response;

      if (data) {
        handleFormat(data);
        setOrders([data]);
      }
    } else setOrders(previousOrders);
  }

  return (
    <>
      <Container>
        <h2>Gerenciamento encomendas</h2>
        <ActionsPanel
          onChange={handleFilterChange}
          placeholder="encomendas"
          url="orders"
        />

        <TableContainer>
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>0{order.id}</td>
                <td>{order.recipient.name}</td>
                <td>
                  <DeliverymanInfo>
                    {order.deliveryman.avatar ? (
                      <img
                        src={order.deliveryman.avatar.url}
                        alt={order.deliveryman.name}
                      />
                    ) : (
                        <span className={order.status}>
                          {order.deliveryman.word}
                        </span>
                      )}
                    {order.deliveryman.name}
                  </DeliverymanInfo>
                </td>
                <td>{order.recipient.city}</td>
                <td>{order.recipient.state}</td>
                <td>
                  <Status status={order.status} />
                </td>
                <td>
                  <TableActions
                    id={order.id}
                    setClick={() => setActionAvailable(!actionAvailable)}
                    actionAvailable={actionAvailable}
                    view={view}
                    setView={setView}
                    url="orders"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      </Container>
      {view && <Details setView={() => setView(!view)} />};
    </>
  );
}
