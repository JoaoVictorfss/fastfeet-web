import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import ActionsPanel from '~/components/ActionsPanel';
import { Container, Picture } from './styles';
import { TableContainer, TableActions } from '~components/Table';

export default function Deliveryman() {
  const [actionAvailable, setActionAvailable] = useState(true);
  const [deliverymen, setDeliverymen] = useState([]);
  const [previousDeliverymen, setPreviousDeliverymen] = useState([]);

  function handleInitials(e) {
    const [first, second] = e.name.split(' ');
    let initials = first[0];

    if (second) {
      initials += second[0];
    }
    e.initials = initials;
  }

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('deliveryman');
      const { data } = response;

      data.forEach(handleInitials);

      setDeliverymen(data);
      setPreviousDeliverymen(data);
    }

    loadDeliverymen();
  }, []);

  async function handleFilterChange(e) {
    const { value } = e.target;
    if (value) {
      const response = await api.get('/deliveryman', {
        params: { name: value },
      });
      const { data } = response;

      if (data.length) {
        handleInitials(data[0]);
        setDeliverymen(data);
      }
    } else setDeliverymen(previousDeliverymen);
  }

  return (
    <Container>
      <h2>Gerenciamento entregadores</h2>
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
          {deliverymen.map((deliveryman) => (
            <tr key={deliveryman.id}>
              <td>#0{deliveryman.id}</td>
              <td>
                <Picture>
                  {deliveryman.avatar ? (
                    <img src={deliveryman.avatar.url} alt={deliveryman.name} />
                  ) : (
                      <span>{deliveryman.initials}</span>
                    )}
                </Picture>
              </td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <TableActions
                  id={deliveryman.id}
                  setClick={() => setActionAvailable(!actionAvailable)}
                  actionAvailable={actionAvailable}
                  url="deliveryman"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </TableContainer>
    </Container>
  );
}
