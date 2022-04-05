import React from 'react';
import Header from './components/Header';
import './App.css';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  render() {
    return (
      <>
      <Header imagemURL='https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1'/>
      <Pokedex/>
      </>
      )
  }
}

export default App;
