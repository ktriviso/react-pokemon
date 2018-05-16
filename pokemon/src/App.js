import React from 'react';
import SinglePoke from './SinglePoke'
import './App.css';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: [],
            poke: {},
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.getPokemon = this.getPokemon.bind(this);

    }

    componentWillMount(){
        this.getPokemon()
    }

    getPokemon(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(data => data.json())
            .then(pokemon => {
                this.setState({
                    pokemon: pokemon.results
                })
                console.log(pokemon)
            })
            .catch(err => console.log(err))
    }

    getOne(url){
        fetch(url)
            .then(data => data.json())
            .then(data => {
                this.setState({
                    poke: data
                })
                console.log('this is the single poke route hitting')
                console.log(data)
            })
            .catch(err => console.log(err))
    }

  render() {
      const list = this.state.pokemon.map((pokemon, i) => {
          return(<li  key={i} onClick={()=>{this.getOne(pokemon.url)}}>{pokemon.name} </li>)
      })
    return (
      <div className="App">
        <ul>
            {list}
        </ul>
        <SinglePoke poke={this.state.poke}/>
      </div>
    );
  }
}
