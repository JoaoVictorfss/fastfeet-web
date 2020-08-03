import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

export default function OrderForm() {
  const { id } = useParams();

  return (
    <div>
      <h1>Olá</h1>
      {id}
    </div>
  );
}
