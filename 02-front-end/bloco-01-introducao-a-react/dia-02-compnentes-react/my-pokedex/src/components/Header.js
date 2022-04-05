import React from "react";
import '../style/Header.css'


class Header extends React.Component {
    constructor (props) {
        super (props);
        this.state ={};
    }

    render() {
        return(
            <header>
                <img className="imgPokemon" src={this.props.imagemURL} alt='icone'/>
            </header>
        )
    }
}

export default Header;