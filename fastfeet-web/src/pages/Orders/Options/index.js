import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdMoreHoriz } from 'react-icons/md';
import { ActionStyle } from './styles';

import TableActions from '~/components/TableActions';

export default function Options({
  id,
  setClick,
  actionAvailable,
  view,
  setView,
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
    <>
      <ActionStyle type="button" onClick={onClick}>
        <MdMoreHoriz size={20} />
      </ActionStyle>
      {visible && (
        <TableActions
          url="orders"
          id={id}
          onClick={onClick}
          handleView={handleView}
        />
      )}
    </>
  );
}

Options.propTypes = {
  id: PropTypes.number.isRequired,
  setClick: PropTypes.func.isRequired,
  actionAvailable: PropTypes.bool.isRequired,
  view: PropTypes.bool.isRequired,
  setView: PropTypes.func.isRequired,
};
