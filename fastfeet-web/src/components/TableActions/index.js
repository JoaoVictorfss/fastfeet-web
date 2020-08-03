import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { MdEdit, MdDelete, MdRemoveRedEye } from 'react-icons/md';
import { Content, Option } from './styles';

export default function TableActions({ id, url, onClick, handleView }) {
  const [showView, setShowView] = useState(false);
  const [showEdit, setshowEdit] = useState(true);
  const [labelDelete, setLabelDelete] = useState('Excluir');
  const [item, setItem] = useState('esta encomenda');

  useEffect(() => {
    if (url === 'deliverymen') {
      setItem('este entregador');
    } else if (url === 'recipients') {
      setItem('este destinatário');
    } else if (url === 'problems') {
      setLabelDelete('Cancelar encomenda');
      setshowEdit(false);
      setShowView(true);
    } else setShowView(true);
  }, [url]);

  const history = useHistory();

  function handleDelete() {
    // eslint-disable-next-line no-alert
    const confirm = window.confirm(
      `Você tem certeza que deseja excluir ${item} ? `
    );

    if (!confirm) {
      return;
    }

    try {
      /* await api.delete(`/ orders / ${ order.id }`);
      updateOrders(); */
      toast.success('Item excluído com sucesso!');
      onClick();
    } catch (err) {
      toast.error('Erro ao excluir!');
    }
  }

  return (
    <>
      <Content>
        {showView && (
          <Option type="button">
            <MdRemoveRedEye color="#7159c1" onClick={handleView} />
            Visualizar
          </Option>
        )}
        {showEdit && (
          <Option
            type="button"
            onClick={() => history.push(`${url}/edit/${id}`)}
          >
            <MdEdit color="#3498db" />
            Editar
          </Option>
        )}
        <Option type="button" onClick={handleDelete}>
          <MdDelete color="#e74c3c" />
          {labelDelete}
        </Option>
      </Content>
    </>
  );
}

TableActions.defaultProps = {
  handleView: () => { },
};

TableActions.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  handleView: PropTypes.func,
};
