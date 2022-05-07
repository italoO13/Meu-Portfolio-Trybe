import React from "react";

class Select extends React.Component {
  render() {
    const {handleForm, select} = this.props
  
    return(
      <label>
      selecione uma op
      <select name="select" onChange={handleForm} value = {select}>
      <option value="valor1">Valor 1</option>
      <option value="valor2" defaultValue>Valor 2</option>
      <option value="valor3">Valor 3</option>
      </select>
    </label>

    )
  }
}

export default Select;