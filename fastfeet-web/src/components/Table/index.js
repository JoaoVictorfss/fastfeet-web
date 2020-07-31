import React from 'react';
import PropTypes from 'prop-types';

import { Content } from './styles';

export default function Table({ children }) {
  return <Content>{children}</Content>;
}

Table.propTypes = {
  children: PropTypes.element.isRequired,
};
