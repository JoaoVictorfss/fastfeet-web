import React, { useState, useEffect } from 'react';

import { MdMoreHoriz } from 'react-icons/md';

import Container from '~/components/Container';
import Table from '~/components/Table';
import Search from '~/components/SearchInput';

export default function Orders() {
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

  // const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    // lógica para pegar os dados da api quando o componente executar
  }, []);

  function handleFilterChange(e) {
    // lógica para filtrar ordens
  }

  return (
    <Container>
      <h2>Gerenciamento encomendas</h2>

      <Search f={handleFilterChange} placeholder="encomendas" />

      <Table>
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
                <MdMoreHoriz size={20} color="#525050" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
