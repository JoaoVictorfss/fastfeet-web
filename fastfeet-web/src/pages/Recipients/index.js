import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ActionsPanel from '~/components/ActionsPanel';
import { TableContainer, TableActions } from '~components/Table';
import { Container } from './styles';

export default function Recipients() {
  const [actionAvailable, setActionAvailable] = useState(true);
  const [orders, setRecipients] = useState([
    {
      id: 0,
      name: 'João Victor',
      endereco: 'Rua Bethoven, 1729, Diadema - São Paulo',
    },
    {
      id: 2,
      name: 'João Victor Fernandes',
      endereco: 'Rua Bethoven, 1729, Diadema - São Paulo',
    },
    {
      id: 3,
      name: 'João Victor Fernandes',
      endereco: 'Rua Bethoven, 1729, Diadema - São Paulo',
    },
    {
      id: 4,
      name: 'João Victor Fernandes',
      endereco: 'Rua Bethoven, 1729, Diadema - São Paulo',
    },
    {
      id: 5,
      name: 'João Victor Fernandes',
      endereco: 'Rua Bethoven, 1729, Diadema - São Paulo',
    },
    {
      id: 6,
      name: 'João Victor Fernandes',
      endereco: 'Rua Bethoven, 1729, Diadema - São Paulo',
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
    <Container>
      <h2>Gerenciamento destinatários</h2>
      <ActionsPanel
        onChange={handleFilterChange}
        placeholder="destinatário"
        url="recipients"
      />

      <TableContainer>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.name}</td>
              <td>{order.endereco}</td>
              <td>
                <TableActions
                  id={order.id}
                  setClick={() => setActionAvailable(!actionAvailable)}
                  actionAvailable={actionAvailable}
                  url="recipients"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </TableContainer>
    </Container>
  );
}
