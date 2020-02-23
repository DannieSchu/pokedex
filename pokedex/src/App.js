import React, { Component } from 'react';
import { getPokemon } from './GetPokemon';
import Header from './Header';
import PokeList from './PokeList';
import './index.css';

export default class App extends Component{
  state = {
    pokedeck: [],
  };

  // load data and store props
  async loadPokemon() {
    // get data (fetch URL from API) and store in variable
    const response = await getPokemon(`https://alchemy-pokedex.herokuapp.com/api/pokedex?`);
    // get results
    const pokemonData = response.results;
    // get number of pokemon
    const pokemonCount = response.count;
    // set initial state of those two properties (setting state here -- essentially in componentDidMount -- means initial rendering happens before the browser updates the screen)
    this.setState({
      pokedeck: pokemonData,
      pokemonCount: pokemonCount
    })
  }

  // initialize dom nodes
  async componentDidMount() {
    // Load pokemon on page load
    await this.loadPokemon();

    // Load pokemon on hashchange
    window.addEventListener('hashchange', async () => {
        await this.loadPokemon();
    })
  }

  render() {
    const { pokedeck, pokemonCount } = this.state;

    return (
      <div className = 'body'>
        <Header pokemonCount={pokemonCount}/>
        <main>
            <PokeList pokedeck = {pokedeck} />
        </main>
      </div>
    );
  }
} 