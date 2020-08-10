import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ActionsPanel from '~/components/ActionsPanel';
import { TableContainer, TableActions } from '~components/Table';
import { Container } from './styles';
import Details from './Details';

export default function Orders() {
  const [actionAvailable, setActionAvailable] = useState(true);
  const [view, setView] = useState(false);

  const [orders, setOrders] = useState([
    {
      id: 0,
      name: 'João Victor',
      recipient: 'Maria',
      city: 'Uberlândia',
      state: 'MG',
      status: 'pendente',
    },
    {
      id: 1,
      name: 'João Victor Fernandes',
      recipient: 'Maria Joquina',
      city: 'Uberaba',
      state: 'SP',
      status: 'entregado',
    },
  ]);

  const history = useHistory();

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
                <td>{order.name}</td>
                <td>{order.recipient}</td>
                <td>{order.city}</td>
                <td>{order.state}</td>
                <td>{order.status}</td>
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
