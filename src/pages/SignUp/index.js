import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  return (
    <>
      {/* <img src={logo} alt="Meetapp" /> */}
      <Form schema={schema}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail." />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta."
        />
        <button type="submit">Registrar</button>

        <Link to="/">Ja é cadastrado? Acesse sua conta</Link>
      </Form>
    </>
  );
}
