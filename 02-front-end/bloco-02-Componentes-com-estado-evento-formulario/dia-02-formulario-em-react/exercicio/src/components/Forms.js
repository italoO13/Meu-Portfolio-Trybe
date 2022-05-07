import React from 'react';
import Input from './input.js';
import DadosEstados from '../data.js';
import ComboBox from './Combobox.js';
import Radio from './Radio.js';


const StateInicial = {
  nome:'',
  email:'',
  cpf:'',
  endereco:'',
  cidade:'',
  uf:'',
  tipo:'',
  logErros:{},
  isValida:true
}



class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      nome:'',
      email:'',
      cpf:'',
      endereco:'',
      cidade:'',
      uf:'',
      tipo:'',
      logErros:{},
      isValida:true

    }
    this.CentroValidacao = this.CentroValidacao.bind(this)
  }

// Validação de Formulario
  limiteTexto = (textoMaximo,state) => {
    if(state.trim().length>textoMaximo) {
      return false
    }
    return true
  }

  CampoObrigatorio =(state) => {
    console.log(state)
    this.shouldComponentUpdate() {
      
    }
    return  state !== StateInicial.nome ? true: false;
  }


  CentroValidacao = (key) => {
    const value = this.state[key];
    let status = true;
    let logErros = {}
    if(key === 'nome') {
      const nome = this.state.nome
      status = this.limiteTexto(40,nome);
      this.setState((prevState)=>({nome: prevState.nome.toUpperCase()}))
      status = this.CampoObrigatorio(nome);
    }

    this.setState({isValida:status})
  }














//Fim da validação


  criaInput = (descricao, nome, type, value, handle) => {
    return <Input descricao={descricao} name={nome} type={type} value={value} handle={handle}></Input>
  }
  componenteControlado = (event)=> {
      const key = event.target.name;
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      this.setState({[key]:value})
      this.CentroValidacao(key)

  }

  render() {
    const {nome, email, cpf, endereco, cidade, uf} = this.state;
    return (
      <form>
        <fieldset>
          <legend>Informações Pessoais</legend>
        {this.criaInput('Nome', 'nome', 'text', nome, this.componenteControlado)}
        {this.criaInput('Email', 'email', 'email', email, this.componenteControlado)}
        {this.criaInput('CPF', 'cpf', 'text', cpf, this.componenteControlado)}
        {this.criaInput('Endereço', 'endereco', 'text', endereco, this.componenteControlado)}
        {this.criaInput('Cidade', 'cidade', 'text', cidade, this.componenteControlado)}
        <ComboBox dados={DadosEstados} value={uf} handle={this.componenteControlado}></ComboBox>
        <div>
        <Radio descricao="Casa" nome="tipo" value="casa" handle={this.componenteControlado}/>
        <Radio descricao="Apartamento" nome="tipo" value="apt" handle={this.componenteControlado}/>
        </div>
        </fieldset>

      </form>
  );
  }
}

export default Form;
