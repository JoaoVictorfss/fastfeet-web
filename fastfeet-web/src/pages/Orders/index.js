import React, { useState, useEffect } from 'react';

import ActionsPanel from '~/components/ActionsPanel';
import { TableContainer, TableActions } from '~components/Table';
import { Container, DeliverymanInfo } from './styles';
import Details from './Details';
import Status from './Status';

export default function Orders() {
  const [actionAvailable, setActionAvailable] = useState(true);
  const [view, setView] = useState(false);

  const [orders, setOrders] = useState([]);
  // const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    // lógica para pegar os dados da api quando o componente executar
  }, []);

  function handleFilterChange(e) {
    // lógica para filtrar orders
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
                <td>#0{order.id}</td>
                <td>{order.recipient.name}</td>
                <td>
                  <DeliverymanInfo>
                    <img
                      src={order.deliveryman.avatar.url}
                      alt={order.deliveryman.name}
                    />
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
