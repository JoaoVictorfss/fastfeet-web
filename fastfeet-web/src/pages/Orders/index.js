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
  const [order, setOrder] = useState({});

  function handleFormat(e) {
    const [first, second] = e.deliveryman.name.split(' ');
    let words = first[0];

    if (second) {
      words += second[0];
    }

    e.deliveryman.words = words;
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
    const { value } = e.target;
    if (Number(value)) {
      const response = await api.get(`/orders/${value}`);
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
            {orders.map((el) => (
              <tr key={el.id}>
                <td>#0{el.id}</td>
                <td>{el.recipient.name}</td>
                <td>
                  <DeliverymanInfo>
                    {el.deliveryman.avatar ? (
                      <img
                        src={el.deliveryman.avatar.url}
                        alt={el.deliveryman.name}
                      />
                    ) : (
                        <span className={el.status}>{el.deliveryman.words}</span>
                      )}
                    {el.deliveryman.name}
                  </DeliverymanInfo>
                </td>
                <td>{el.recipient.city}</td>
                <td>{el.recipient.state}</td>
                <td>
                  <Status status={el.status} />
                </td>
                <td>
                  <TableActions
                    id={el.id}
                    setClick={() => setActionAvailable(!actionAvailable)}
                    actionAvailable={actionAvailable}
                    view={view}
                    setView={setView}
                    set={setOrder}
                    url="orders"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      </Container>
      {view && <Details order={order} setView={() => setView(!view)} />}
    </>
  );
}
