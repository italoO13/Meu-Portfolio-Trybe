import React from "react";

class Fieldset extends React.Component {
  
  render() {
    const {nome,sbvc} = this.props.value;
    return(
      <fieldset>
      <legend>Exercicio</legend>
      <label>
        Nome
        <input name="nome" value = {nome} type='text' onChange={this.props.handleForm} ></input>
      </label>
      <label>
        Fale sobre vc
        <textarea name="sbvc" onChange={this.props.handleForm} value={sbvc} type='text'></textarea>
      </label>
    </fieldset>
    )
  }
}

export default Fieldset;