import React from 'react';
import PropTypes from 'prop-types';

import { MdSearch } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';

import { Container, SearchInput, AddButton } from './styles';

export default function Panel({ onChange, placeholder, onClick }) {
  return (
    <Container>
      <SearchInput>
        <MdSearch size={20} />
        <input
          type="text"
          placeholder={`Buscar por ${placeholder}`}
          onChange={onChange}
        />
      </SearchInput>

      <AddButton onClick={onClick}>
        <IoIosAdd size={30} />
        CADASTRAR
      </AddButton>
    </Container>
  );
}

Panel.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
