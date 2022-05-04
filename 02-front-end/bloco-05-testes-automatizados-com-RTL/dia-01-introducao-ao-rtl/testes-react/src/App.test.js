import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const input = screen.getByLabelText("Email")
  expect(input).toBeInTheDocument();
  expect(input).toHaveProperty("type", 'email')
});

test('Verifica se existe 2 botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole("button")
  expect(buttons).toHaveLength(2);
});

test('Verifica se existe um botão de enviar', () => {
  render(<App />);
  const btnEnviar = screen.getByTestId("id-send")
  expect(btnEnviar).toBeInTheDocument();
  expect(btnEnviar).toHaveProperty("type", "button");
  expect(btnEnviar).toHaveValue("Enviar")

});

test('Verifica se a funcionalidade de email esta ok', () => {
  render(<App />);
  const EMAIL_USER = "italo@iveldo.com"
  const inputEmail = screen.getByLabelText("Email");  
  const buttonEnviar = screen.getByTestId("id-send");

  const tagh2 = screen.getByTestId("id-email-user");
  expect(tagh2).toBeInTheDocument();
  expect(tagh2).toHaveTextContent("Valor:");

  userEvent.type(inputEmail, EMAIL_USER)
  userEvent.click(buttonEnviar)

  expect(inputEmail).toHaveTextContent("");
  expect(tagh2).toHaveTextContent(`Valor: ${EMAIL_USER}`)

});

