import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ActionsPanel from '~/components/ActionsPanel';
import { TableContainer, TableActions } from '~components/Table';
import { Container, DeliverymanInfo } from './styles';
import Details from './Details';
import Status from './Status';

export default function Orders() {
  const [actionAvailable, setActionAvailable] = useState(true);
  const [view, setView] = useState(false);

  const [orders, setOrders] = useState([
    {
      id: 1,
      recipient: 'Maria Joquina',
      deliveryman: 'João Victor Fernandes',
      url: 'https://api.adorable.io/avatars/50/abott@adorable.png',
      city: 'Uberaba',
      state: 'SP',
      status: 'retirada',
    },
    {
      id: 2,
      recipient: 'Maria Joquina',
      deliveryman: 'João Victor Fernandes',
      url: 'https://api.adorable.io/avatars/50/abott@adorable.png',
      city: 'Uberaba',
      state: 'SP',
      status: 'cancelada',
    },
    {
      id: 3,
      recipient: 'Maria Joquina',
      deliveryman: 'João Victor Fernandes',
      url: 'https://api.adorable.io/avatars/50/abott@adorable.png',
      city: 'Uberaba',
      state: 'SP',
      status: 'entregue',
    },
    {
      id: 4,
      recipient: 'Maria Joquina',
      deliveryman: 'João Victor Fernandes',
      url: 'https://api.adorable.io/avatars/50/abott@adorable.png',
      city: 'Uberaba',
      state: 'SP',
      status: 'entregue',
    },
    {
      id: 5,
      recipient: 'Maria Joquina',
      deliveryman: 'João Victor Fernandes',
      url: 'https://api.adorable.io/avatars/50/abott@adorable.png',
      city: 'Uberaba',
      state: 'SP',
      status: 'retirada',
    },
    {
      id: 6,
      recipient: 'Maria Joquina',
      deliveryman: 'João Victor Fernandes',
      url: 'https://api.adorable.io/avatars/50/abott@adorable.png',
      city: 'Uberaba',
      state: 'SP',
      status: 'cancelada',
    },
  ]);

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
                <td>#{order.id}</td>
                <td>{order.recipient}</td>
                <td>
                  <DeliverymanInfo>
                    <img src={order.url} alt={order.deliveryman} />
                    {order.deliveryman}
                  </DeliverymanInfo>
                </td>
                <td>{order.city}</td>
                <td>{order.state}</td>
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
