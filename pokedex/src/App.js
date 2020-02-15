import React, { Component } from 'react';
// import request from 'superagent';
import Header from './Header';
import PokeList from './PokeList';
import Paging from './Paging';
import SearchOptions from './SearchOptions.js'
// import Select from './Select';
import './index.css';

export default class App extends Component{
  state = {
    pokeObjects: [],
    // selected: 'fire'
  };

  async getPokemon(URL) {
    // get rid of the first character of the hash (#); return everything after it
    let queryString = window.location.hash.slice(1);
    // return whole URL
    const url = `${URL}${queryString}`;
    // send that url along to the fetch
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.response === "False") {
      return {
        search: [],
        totalResults: 0
      };
    }
    return data;
  }

  // load data and store props
  async loadPokemon() {
    // 1. get data (fetch URL from API) and store in variable
    const data = await this.getPokemon(`https://alchemy-pokedex.herokuapp.com/api/pokedex`);
    // 2. set "search" property of data to variable
    // const searchedPokemon = data.results;
    // 3. set "totalResults" property of data to variable
    const totalResults = data.results;
    console.log(data)
    // 4. set initial state of those two properties (setting state here -- essentially in componentDidMount -- means initial rendering happens before the browser updates the screen)
    this.setState({
      // pokeObjects: searchedPokemon,
      totalResults: totalResults
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
    // set new state
    // const handleChange = event => {
    //   this.setState({
    //     selected: event.target.value
    //   })
    // }
    // const filteredPokemon = this.state.pokeObjects.filter(item => {
    //   if(this.state.selected === true);
    //   return item.type_1 === this.state.selected;
    // })

    // render state to be passed as props
    const { pokeObjects, totalResults } = this.state;

    return (
      <div className = 'body'>
        <Header />
        <main>
          <SearchOptions />
          {/* <div className="filter">
            <label>Filter by type: </label>
            <Select handleChangeCallback = {handleChange} />
          </div> */}
            <PokeList pokedeck = {pokeObjects} />
            <Paging totalResults = {totalResults} />
        </main>
      </div>
    );
  }
} 