import React from 'react';



class Ol extends React.Component{

    constructor(props) {
        super(props)

        this.taks = this.taks.bind(this);
    }

    taks = (tarefa) => {
        return (
            <li>{tarefa}</li>
        )
    }

    render() {
      return (
        <ol>
            {this.props.arr.map((tarefa) => this.taks(tarefa))}
        </ol>
      );
    }
  }
  
export default Ol;