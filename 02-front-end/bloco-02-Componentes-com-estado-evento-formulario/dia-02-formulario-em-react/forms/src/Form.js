import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {}
  }
  render() {
    return(
      <div>
        <h1>estados e React</h1>
        <Form>
          <label>
            Duga qual é o seu estados
            <textarea name="estadoFavorito"></textarea>
          </label>
        </Form>

      </div>
    )
  }
}

export default Form;