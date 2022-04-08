import React from "react";
import Fieldset from './Fieldset.js'
import Select from './Select.js'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nome:'',
      sbvc:'',
      select:'Valor2',
      check: false,
      erro:false
    }
    // this.handleForm = this.handleForm.bind(this)
    // this.fileInput = React.createRef();
    // this.ErroNoFormulario = this.ErroNoFormulario.bind(this);
  }
handleForm = (event) => {
  const {target} = event
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  this.setState({[name]:value})
}

ErroNoFormulario = (situacao) => {
  this.setState({erro:true});
}

  render() {
    return (
      <div>
        <h1>Formulario</h1>
        <form>
          <Fieldset handleForm={this.handleForm}  value={this.state}/>
          <Select handleForm = {this.handleForm} erro={this.state.erro} select={this.state.select} ErroNoFormulario= {this.ErroNoFormulario}/>
          <label>
            Acerta ?
            <input name="check" type='checkbox' onChange={this.handleForm} value={this.state.check}></input>
          </label>
          <label>
            controla arquivo
            {/* <input type='file' ref={this.fileInput}></input> */}
          </label>
        </form>
      </div>
    )
  }
}

export default Form;