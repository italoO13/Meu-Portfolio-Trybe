import React from "react";
import '../style/Pokemon.css'

class Pokemon extends React.Component {
    constructor (props) {
        super(props);
        this.state ={};
    }
    render() {
    const {name,type, averageWeight, image} = this.props.info;

        return (
        <div className={`${type} card`}>
            <div className="imgWrapper" >
            <img src={image} alt={name} />
            </div>
            <ul>
                <li>{name}</li>
                <li>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit} `}</li>
                <li>{type}</li>
            </ul>
        </div>
        )
    }

}

export default Pokemon;