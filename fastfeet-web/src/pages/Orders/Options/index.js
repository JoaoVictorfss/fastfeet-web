import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdMoreHoriz } from 'react-icons/md';
import { ActionStyle } from './styles';

import TableActions from '~/components/TableActions';

export default function Options({ id, setClick, actionAvailable }) {
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

  return (
    <>
      <ActionStyle type="button" onClick={onClick}>
        <MdMoreHoriz size={20} />
      </ActionStyle>
      {visible && <TableActions url="orders" id={id} onClick={onClick} />}
    </>
  );
}

Options.propTypes = {
  id: PropTypes.number.isRequired,
  setClick: PropTypes.func.isRequired,
  actionAvailable: PropTypes.bool.isRequired,
};
