import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import logo from '~/assets/logo.png';
import { Container, Content, Navbar, LogOut } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="FastFeet" />
          </Link>
          <Navbar>
            <NavLink to="/orders" activeClassName="selected">
              Encomendas
            </NavLink>
            <NavLink to="/deliverymen" activeClassName="selected">
              Entregadores
            </NavLink>
            <NavLink to="/recipients" activeClassName="selected">
              Destinatários
            </NavLink>
            <NavLink to="/problems" activeClassName="selected">
              Problemas
            </NavLink>
          </Navbar>
        </nav>
        <LogOut>
          <strong>Admin FastFeet</strong>
          <button type="button" onClick={handleSignOut}>
            sair do sistema
          </button>
        </LogOut>
      </Content>
    </Container>
  );
}
