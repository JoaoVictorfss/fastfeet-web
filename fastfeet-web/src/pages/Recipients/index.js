import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import ActionsPanel from '~/components/ActionsPanel';
import { TableContainer, TableActions } from '~components/Table';
import { Container } from './styles';

export default function Recipients() {
  const [actionAvailable, setActionAvailable] = useState(true);
  const [recipients, setRecipients] = useState([]);
  const [previousRecipients, setPreviousRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');
      const { data } = response;

      setRecipients(data);
      setPreviousRecipients(data);
    }

    loadRecipients();
  }, []);

  async function handleFilterChange(e) {
    const { value } = e.target;
    if (value) {
      // search by name
      const response = await api.get('/recipients', {
        params: { name: value },
      });
      const { data } = response;
      if (data.length) {
        setRecipients(data);
      }
    } else setRecipients(previousRecipients);
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
          {recipients.map((recipient) => (
            <tr key={recipient.id}>
              <td>#0{recipient.id}</td>
              <td>{recipient.name}</td>
              <td>
                {recipient.street}, {recipient.number}, {recipient.city}-
                {recipient.state}
              </td>
              <td>
                <TableActions
                  id={recipient.id}
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
