import React from 'react';

class ComboBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  criaOp = (estado,index) => {
     return <option value={estado} key={index}>{estado}</option> 
  }

  render() {
    const {value, handle, dados} = this.props;
    return (
        <label>
          Escolha seu estado
        <select name='uf' onChange={handle} value={value}>
          {dados.map(this.criaOp)}
        </select>
        </label>
    )
  }
}

export default ComboBox;
