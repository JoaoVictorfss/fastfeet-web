import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { TableContainer, TableActions } from '~components/Table';
import { Container } from './styles';
import Details from './Details';

export default function Problems() {
  const [actionAvailable, setActionAvailable] = useState(true);
  const [view, setView] = useState(false);

  const [problems, setProblems] = useState([
    {
      id: 0,
      problem:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam natus impedit quia ad nostrum accusamus praesentium odio inventore qui alias, distinctio, sed ab. Eaque corporis architecto necessitatibus culpa saepe ab? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam natus impedit quia ad nostrum accusamus praesentium odio inventore qui alias, distinctio, sed ab. Eaque corporis architecto necessitatibus culpa saepe ab?',
    },
    {
      id: 1,
      problem:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam natus impedit quia ad nostrum accusamus praesentium odio inventore qui alias, distinctio, sed ab. Eaque corporis architecto necessitatibus culpa saepe ab? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam natus impedit quia ad nostrum accusamus praesentium odio inventore qui alias, distinctio, sed ab. Eaque corporis architecto necessitatibus culpa saepe ab?',
    },
    {
      id: 2,
      problem:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam natus impedit quia ad nostrum accusamus praesentium odio inventore qui alias, distinctio, sed ab. Eaque corporis architecto necessitatibus culpa saepe ab? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam natus impedit quia ad nostrum accusamus praesentium odio inventore qui alias, distinctio, sed ab. Eaque corporis architecto necessitatibus culpa saepe ab?',
    },
    {
      id: 3,
      problem:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam natus impedit quia ad nostrum accusamus praesentium odio inventore qui alias, distinctio, sed ab. Eaque corporis architecto necessitatibus culpa saepe ab? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam natus impedit quia ad nostrum accusamus praesentium odio inventore qui alias, distinctio, sed ab. Eaque corporis architecto necessitatibus culpa saepe ab?',
    },
    {
      id: 4,
      problem:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam natus impedit quia ad nostrum accusamus praesentium odio inventore qui alias, distinctio, sed ab. Eaque corporis architecto necessitatibus culpa saepe ab? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam natus impedit quia ad nostrum accusamus praesentium odio inventore qui alias, distinctio, sed ab. Eaque corporis architecto necessitatibus culpa saepe ab?',
    },
    {
      id: 5,
      problem:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam natus impedit quia ad nostrum accusamus praesentium odio inventore qui alias, distinctio, sed ab. Eaque corporis architecto necessitatibus culpa saepe ab? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam natus impedit quia ad nostrum accusamus praesentium odio inventore qui alias, distinctio, sed ab. Eaque corporis architecto necessitatibus culpa saepe ab?',
    },
  ]);

  const history = useHistory();

  // const [filteredProblems, setFilteredProblems] = useState([]);

  useEffect(() => {
    // lógica para pegar os dados da api quando o componente executar
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
            {problems.map((problem) => (
              <tr key={problem.id}>
                <td>#0{problem.id}</td>
                <td>
                  <p>{problem.problem}</p>
                </td>
                <td>
                  <TableActions
                    id={problem.id}
                    setClick={() => setActionAvailable(!actionAvailable)}
                    actionAvailable={actionAvailable}
                    view={view}
                    setView={setView}
                    url="problems"
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
