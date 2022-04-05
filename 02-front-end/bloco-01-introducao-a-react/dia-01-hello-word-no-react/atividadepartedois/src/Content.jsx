import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

    function result(conteudo, key) {
        return (<li key={key}>{`
        O conteudo é: ${conteudo.conteudo}
        Status: ${conteudo.status}
        Bloco: ${conteudo.bloco}
        `}</li>)
    }


class Content extends React.Component {
    render() {
        return(
        <ol className="lista" >{conteudos.map((conteudo,key) => result(conteudo,key))}</ol>
        )
    }
}


export default Content;