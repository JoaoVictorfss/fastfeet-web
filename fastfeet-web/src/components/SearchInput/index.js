import React from 'react';
import PropTypes from 'prop-types';

import { MdSearch } from 'react-icons/md';

import { Search } from './styles';

export default function SearchInput({ f, placeholder }) {
  return (
    <Search>
      <MdSearch size={20} />
      <input
        type="text"
        placeholder={`Buscar por ${placeholder}`}
        onChange={f}
      />
    </Search>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  f: PropTypes.func.isRequired,
};
