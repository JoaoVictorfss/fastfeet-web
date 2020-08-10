import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Badge, Content } from './styles';

export default function Status({ status }) {
  const [statusClass, setStatusClass] = useState('');

  useEffect(() => {
    if (status === 'pendente') setStatusClass('Pending');
    else if (status === 'entregue') setStatusClass('Delivered');
    else if (status === 'retirada') setStatusClass('Withdrawn');
    else setStatusClass('Canceled');
  }, [status]);

  return (
    <Container>
      <Content className={statusClass}>
        <Badge />
        <strong>{status}</strong>
      </Content>
    </Container>
  );
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
};
