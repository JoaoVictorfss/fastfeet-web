import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdMoreHoriz } from 'react-icons/md';
import { ActionStyle, Container } from './styles';

import Options from './Options';

export default function TableActions({
  id,
  setClick,
  actionAvailable,
  view,
  setView,
  url,
}) {
  const [visible, setVisible] = useState(false);

  function onClick() {
    switch (actionAvailable) {
      case true:
        setVisible(!visible);
        setClick();
        break;
      default:
        if (visible) {
          setVisible(!visible);
          setClick();
        }
        break;
    }
  }

  function handleView() {
    setView(!view);
    onClick();
  }

  return (
    <Container>
      <ActionStyle onClick={onClick}>
        <MdMoreHoriz size={20} />
      </ActionStyle>
      {visible && (
        <Options url={url} id={id} onClick={onClick} handleView={handleView} />
      )}
    </Container>
  );
}

TableActions.defaultProps = {
  setView: () => { },
  view: false,
};

TableActions.propTypes = {
  id: PropTypes.number.isRequired,
  setClick: PropTypes.func.isRequired,
  actionAvailable: PropTypes.bool.isRequired,
  view: PropTypes.bool,
  setView: PropTypes.func,
  url: PropTypes.string.isRequired,
};
