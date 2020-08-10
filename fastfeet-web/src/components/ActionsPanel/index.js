import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { MdSearch } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';

import { Container, SearchInput, AddButton } from './styles';

export default function Panel({ onChange, placeholder, url }) {
  const [page, setPage] = useState('');

  useEffect(() => {
    const pageRegister = `${url}/register`;
    setPage(pageRegister);
  }, [url]);

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

      <AddButton>
        <IoIosAdd size={30} color="#fff" />
        <Link to={page}>CADASTRAR</Link>
      </AddButton>
    </Container>
  );
}

Panel.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
