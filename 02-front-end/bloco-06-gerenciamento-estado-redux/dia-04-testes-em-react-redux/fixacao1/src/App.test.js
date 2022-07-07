import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import renderWithRedux from './renderWithRedux';

describe('testeando clicks', () => {
  beforeEach(cleanup);
  test('vericia se renderiza o botao de clique e o texto 0 na tela', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}})
    const buttonAdd = screen.getByText('Clique aqui');
    expect(buttonAdd).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  })
  test('verifica se o clique funciona', () => {
    renderWithRedux(<App />)
    const buttonAdd = screen.getByText('Clique aqui');
    userEvent.click(buttonAdd);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
  test("verifica se mudando o valro incial para 10 funciona", () => {
    const {getByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    expect(getByText('10')).toBeInTheDocument();

    
  })

})