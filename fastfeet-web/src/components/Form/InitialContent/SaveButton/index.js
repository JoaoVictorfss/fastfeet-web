import React from 'react';
import PropTypes from 'prop-types';

import { MdCheck } from 'react-icons/md';
import { Container } from './styles';

export default function SaveButton({ onClick, ...rest }) {
  return (
    <Container>
      <button type="submit" onClick={onClick}>
        <MdCheck size={22} />
        <strong>SALVAR</strong>
      </button>
    </Container>
  );
}

SaveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
