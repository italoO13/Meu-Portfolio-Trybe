import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      valorBotao1:0,
      valorBotao2:0,
      valorBotao3:0,

    };
    this.handleClick = this.handleClick.bind(this);
    this.cor = this.cor.bind(this);
  }

  handleClick = (event) => {
   
    if (event.target.id === '1') {
      this.setState((estadoAtual, _props) => (
        {valorBotao1: estadoAtual.valorBotao1 + 1
      }
      ))
    }else if (event.target.id ==='2') {
      this.setState((estadoAtual,_props) =>(
        {valorBotao2: estadoAtual.valorBotao2 + 1}
      ))
    } else {
      this.setState((estadoAtual,_props) =>(
        {valorBotao3: estadoAtual.valorBotao3 + 1}
      ))
    }
  }

  cor = (num) => {
    return num % 2 === 0 ? 'red':'white';
  }

  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return(
      <div>
        <button
        id='1'
        onClick={this.handleClick}
        style = {{background: this.cor(this.state.valorBotao1)}}
        >
          {this.state.valorBotao1}
        </button>
        <button
        id='2'
        onClick={this.handleClick}
        style={{background: this.cor(this.state.valorBotao2)}}
        >
          {this.state.valorBotao2}
        </button>
        <button
        id='3'
        onClick={this.handleClick}
        style={{background:this.cor(this.state.valorBotao3)}}
        >
          {this.state.valorBotao3}
        </button>
      </div>
      ) 
  }
}

export default App;