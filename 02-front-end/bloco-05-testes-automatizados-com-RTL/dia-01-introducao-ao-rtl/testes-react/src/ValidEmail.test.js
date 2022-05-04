import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';


test("Testando um componente, caso o email seja valido", ()=> {
  const EMAIL_USER = "italOErrado";
  render(<ValidEmail email={EMAIL_USER} />)
  const valid = screen.getByText("Email Inválido");
  expect(valid).toBeInTheDocument();

})

test("Testando um componente, caso o email seja invalido", ()=> {
  const EMAIL_USER = "italO@gmail.com";
  render(<ValidEmail email={EMAIL_USER} />)
  const valid = screen.getByText("Email Válido");
  expect(valid).toBeInTheDocument();

})

test("Testando um componente, caso email seja vazio", ()=> {
  const EMAIL_USER = "";
  render(<ValidEmail email={EMAIL_USER} />)
  const isvalid = screen.queryByText("Email Válido");
  expect(isvalid).toBeNull()
  const notValid = screen.queryByText("Email Inválido");
  expect(notValid).toBeNull()

})

test("Verifica se é verde caso valido", ()=> {
  const EMAIL_USER = "italo@gemail.com";
  render(<ValidEmail email={EMAIL_USER} />)
  const isvalid = screen.queryByText("Email Válido");
  expect(isvalid).toHaveAttribute("class","isValid")

})

test("Verifica se é vermelho caso não valido valido", ()=> {
  const EMAIL_USER = "italo";
  render(<ValidEmail email={EMAIL_USER} />)
  const isvalid = screen.queryByText("Email Inválido");
  expect(isvalid).toHaveAttribute("class","notValid")

})