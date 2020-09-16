import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { MdEdit, MdDelete, MdRemoveRedEye } from 'react-icons/md';
import api from '~/services/api';

import { Container, Option, Button } from './styles';

export default function Options({ id, url, onClick, handleView }) {
  const [showView, setShowView] = useState(false);
  const [showEdit, setshowEdit] = useState(true);

  const [labelDelete, setLabelDelete] = useState('Excluir');

  useEffect(() => {
    switch (url) {
      case 'problems':
        setLabelDelete('Cancelar encomenda');
        setshowEdit(false);
        setShowView(true);
        break;
      case 'orders':
        setShowView(true);
        break;
      default:
        break;
    }
  }, [url]);

  const history = useHistory();

  async function handleDelete() {
    // eslint-disable-next-line no-alert
    const confirm = window.confirm(
      `Você tem certeza que deseja excluir este item ? `
    );

    if (!confirm) {
      return;
    }

    try {
      await api.delete(`/${url}/${id}`);
      history.go(0);
      toast.success('Item excluído com sucesso!');
      onClick();
    } catch (err) {
      toast.error('Erro ao excluir!');
    }
  }

  return (
    <>
      <Container problem={!showEdit}>
        <ul>
          {showView && (
            <Option>
              <Button onClick={() => handleView()}>
                <MdRemoveRedEye color="#7159c1" />
                Visualizar
              </Button>
            </Option>
          )}
          {showEdit && (
            <Option>
              <Button onClick={() => history.push(`${url}/edit/${id}`)}>
                <MdEdit color="#3498db" />
                Editar
              </Button>
            </Option>
          )}
          <Option>
            <Button onClick={handleDelete}>
              <MdDelete color="#e74c3c" />
              {labelDelete}
            </Button>
          </Option>
        </ul>
      </Container>
    </>
  );
}

Options.defaultProps = {
  handleView: () => { },
};

Options.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  handleView: PropTypes.func,
};
