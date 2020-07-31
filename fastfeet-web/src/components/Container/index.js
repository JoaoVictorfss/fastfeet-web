import React from 'react';
import PropTypes from 'prop-types';

import { Content } from './styles';

export default function Container({ title, children }) {
  return (
    <Content>
      <h2>{title}</h2>
      {children}
    </Content>
  );
}

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
