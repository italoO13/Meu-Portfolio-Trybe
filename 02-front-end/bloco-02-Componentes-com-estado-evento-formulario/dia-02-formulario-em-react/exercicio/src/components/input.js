import React from 'react';

class Input extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    const {descricao, name, type, value, handle} = this.props;
    return (
      <label>
        {descricao}
        <input name={ name} type={ type } value={value} onChange={handle}></input>
      </label>
  );
  }
}

export default Input;
