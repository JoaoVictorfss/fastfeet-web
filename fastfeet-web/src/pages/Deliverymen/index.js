import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ActionsPanel from '~/components/ActionsPanel';
import { Container } from './styles';
import { TableContainer, TableActions } from '~components/Table';

export default function Deliveryman() {
  const [actionAvailable, setActionAvailable] = useState(true);
  const [deliverymen, setDeliverymen] = useState([
    {
      id: 0,
      foto: 'MF',
      name: 'João Victor',
      email: 'jvsfernandes924@gmail.com',
    },
    {
      id: 1,
      foto: 'MF',
      name: 'João Victor',
      email: 'jvsfernandes924@gmail.com',
    },
    {
      id: 2,
      foto: 'MF',
      name: 'João Victor',
      email: 'jvsfernandes924@gmail.com',
    },
    {
      id: 3,
      foto: 'MF',
      name: 'João Victor',
      email: 'jvsfernandes924@gmail.com',
    },
    {
      id: 4,
      foto: 'MF',
      name: 'João Victor',
      email: 'jvsfernandes924@gmail.com',
    },
  ]);

  const history = useHistory();

  // const [filtereddeliverymen, setFiltereddeliverymen] = useState([]);

  useEffect(() => {
    // lógica para pegar os dados da api quando o componente executar
  }, []);

  function handleFilterChange(e) {
    // lógica para filtrar deliverymen
  }

  return (
    <Container>
      <h2>Gerenciamento encomendas</h2>
      <ActionsPanel
        onChange={handleFilterChange}
        placeholder="encomendas"
        url="deliverymen"
      />

      <TableContainer>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymen.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.foto}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>
                <TableActions
                  id={order.id}
                  setClick={() => setActionAvailable(!actionAvailable)}
                  actionAvailable={actionAvailable}
                  url="deliverymen"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </TableContainer>
    </Container>
  );
}
