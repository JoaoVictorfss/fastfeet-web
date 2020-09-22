import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdMoreHoriz } from 'react-icons/md';
import { ActionStyle, Container } from './styles';

import Options from './Options';

import api from '~/services/api';

export default function TableActions({
  id,
  setClick,
  actionAvailable,
  view,
  setView,
  set,
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

  async function handleView() {
    const response = await api.get(`${url}/${id}`);
    const { data } = response;

    if (url === 'orders') {
      if (data.start_at !== null) {
        data.start_at = format(parseISO(data.start_at), "dd'/0'M'/'yyyy", {
          locale: pt,
        });
      }
      if (data.start_at !== null && data.end_at !== null) {
        data.end_at = format(parseISO(data.end_at), "dd'/0'M'/'yyyy", {
          locale: pt,
        });
      }
    }
    set(data);
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
  set: () => { },
  view: false,
};

TableActions.propTypes = {
  id: PropTypes.number.isRequired,
  setClick: PropTypes.func.isRequired,
  actionAvailable: PropTypes.bool.isRequired,
  view: PropTypes.bool,
  setView: PropTypes.func,
  set: PropTypes.func,
  url: PropTypes.string.isRequired,
};
