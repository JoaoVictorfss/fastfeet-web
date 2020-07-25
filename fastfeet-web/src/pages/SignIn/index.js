import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';

// validando dados do formulário
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function SignIn() {
  return (
    <>
      <img src={logo} alt="Gobarber" />

      <Form schema={schema}>
        <strong>Seu e-email</strong>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <strong>Sua senha</strong>
        <Input name="password" type="password" placeholder="*************" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}

export default SignIn;
