import React from 'react';
import './App.css';
import Ol from './Ol.js'

class App extends React.Component{

  constructor() {
    super()
    this.state = {tarefa:'', lista:[]}
    this.pegaTarefa = this.pegaTarefa.bind(this)
    this.adicionaTarefa = this.adicionaTarefa.bind(this);
  }

  pegaTarefa = (event) => {
    this.setState({tarefa: event.target.value})
  }

  adicionaTarefa = (event) => {
    event.preventDefault();
    this.setState({lista: [...this.state.lista, this.state.tarefa]})
    this.setState({tarefa:''})
  }

  render() {
    return (
      <div>
        <form>
          <input onChange={this.pegaTarefa} value={this.state.tarefa}></input>
          <button onClick={this.adicionaTarefa}>Add</button>
        </form>

        <Ol arr={this.state.lista} Ol/>
      </div>

    );
  }
}

export default App;
