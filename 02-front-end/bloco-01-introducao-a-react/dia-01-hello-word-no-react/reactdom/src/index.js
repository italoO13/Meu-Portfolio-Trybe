import React from "react";
import ReactDOM from 'react-dom';
import './teste.css'


function tick () {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', {hour12:true})}.</h2>
    </div>
  );

  ReactDOM.render(<div>{element}</div>,document.getElementById('root'));
}

setInterval(tick, 1000)