import React from 'react';

class Radio extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    const {descricao, nome, value, handle} = this.props;
    return (
        <label>
          {descricao}
          <input name={nome} type="radio" value={value} onChange={handle} checked={this.state.tipo} ></input>
        </label>
    )
  }
}

export default Radio;
