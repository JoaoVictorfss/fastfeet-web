import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import { TableContainer, TableActions } from '~components/Table';
import { Container } from './styles';
import Details from './Details';

export default function Problems() {
  const [actionAvailable, setActionAvailable] = useState(true);
  const [view, setView] = useState(false);
  const [problems, setProblems] = useState([]);
  const [problem, setProblem] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('problems');
      const { data } = response;
      setProblems(data);
    }

    loadProblems();
  }, []);

  return (
    <>
      <Container>
        <h2>Problemas na entrega</h2>

        <TableContainer>
          <thead>
            <tr>
              <th>Encomenda</th>
              <th>Problema</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((el) => (
              <tr key={el.id}>
                <td>#0{el.id}</td>
                <td>
                  <p>{el.description}</p>
                </td>
                <td>
                  <TableActions
                    id={el.id}
                    setClick={() => setActionAvailable(!actionAvailable)}
                    actionAvailable={actionAvailable}
                    view={view}
                    setView={setView}
                    set={setProblem}
                    url="problems"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      </Container>
      {view && <Details setView={() => setView(!view)} problem={problem} />};
    </>
  );
}
