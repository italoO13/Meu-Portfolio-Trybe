import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';
import App, { About } from './App';

describe("Teste da aplicação toda", () => {  
  it("deve renderizar o componente App", () => {
    renderWithRouter(<App />);
  
    const hometile = screen.getByRole("heading", { name: 'Você está na página Início' })
    expect(hometile).toBeInTheDocument();
  })
  
  it("deve renderizar o componente sobre", ()=> {
    const { history } = renderWithRouter(<App />);
  
    const aboutlink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutlink).toBeInTheDocument();
    userEvent.click(aboutlink);
  
    const { pathname } = history.location;
    expect(pathname).toBe("/about");
  
    const abouttitle = screen.getByRole("heading", { name: 'Você está na página Sobre' })
    expect(abouttitle).toBeInTheDocument();
  })
})

it("deve testar um caminho não existente e a redenrização do Not Found", () => {
  // const { history } = renderWithRouter(<App />);

  // act(() => history.push('/pagina/que-nao-existe/'));

  // const notFoundTitle = screen.getByRole('heading',
  //   { name: /Página não encontrada/i });
  // expect(notFoundTitle).toBeInTheDocument();

})

it("Verifica se o componenete about renderiza (Apenas compoenente)", () => {
  renderWithRouter(<About />);

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
})