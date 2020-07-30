import React from 'react';

import { MdMoreHoriz } from 'react-icons/md';
import Container from '~/components/Container';
import Table from '~/components/Table';

export default function Orders() {
  const tableBody = [
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
  ];

  return (
    <Container>
      <h1>Gerenciamento encomendas</h1>

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
          {tableBody.map((order) => (
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
