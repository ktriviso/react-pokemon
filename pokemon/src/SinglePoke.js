import React from 'react';

export default class SinglePoke extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.poke.name)
        return (
            <div className="pokeProf">
                <h1>Name: {this.props.poke.name}</h1>
                <h1>Weight: {this.props.poke.weight}</h1>
            </div>
        )
    }
}
