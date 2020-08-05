import React from 'react';
import PropTypes from 'prop-types';
import { Container, Buttons } from './styles';
import BackButton from './BackButton';
import SaveButton from './SaveButton';

export default function InitialContent({ title, onClick }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Buttons>
        <BackButton />
        <SaveButton onClick={onClick} />
      </Buttons>
    </Container>
  );
}

InitialContent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
