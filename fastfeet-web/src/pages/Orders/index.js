import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { MdClose } from 'react-icons/md';
import ActionsPanel from '~/components/ActionsPanel';
import Options from './Options';

import {
  Table,
  Container,
  WrapperView,
  PreviewContainer,
  PreviewContent,
} from './styles';

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

  function handleAddOrders() {
    history.push('/orders/register');
  }

  return (
    <>
      <Container>
        <h2>Gerenciamento encomendas</h2>
        <ActionsPanel
          onChange={handleFilterChange}
          placeholder="encomendas"
          onClick={handleAddOrders}
        />

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
                  <Options
                    id={order.id}
                    setClick={() => setActionAvailable(!actionAvailable)}
                    actionAvailable={actionAvailable}
                    view={view}
                    setView={setView}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      {view && (
        <WrapperView>
          <PreviewContainer>
            <MdClose size={20} onClick={() => setView(!view)} />
            <PreviewContent>
              <ul>
                <li>
                  <strong>Informações sobre a encomenda</strong>
                </li>
                <li>Rua Beethoven, 1729</li>
                <li>Diadema-SP</li>
                <li>099660-580</li>
              </ul>
              <ul>
                <li>
                  <strong>Datas</strong>
                </li>
                <li>
                  <strong>Retirada</strong>: 25/01/2020
                </li>
                <li>
                  <strong>Entrega</strong>: 25/01/2020
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Assinatura do destinatário</strong>
                </li>
              </ul>
            </PreviewContent>
          </PreviewContainer>
        </WrapperView>
      )}
    </>
  );
}
