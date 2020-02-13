import React, { Component } from 'react';
import request from 'superagent';
import Header from './Header';
import PokeList from './PokeList';
import './App.css';
import './index.css';

export default class App extends Component{
  state = {
    list: [],
    selected: null
  };
  async componentDidMount() {
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)
    this.setState({list: data.body.results})
    console.log(data.body.results)

  }
  render() {
    const handleChange = event => {
      this.setState({
        selected: event.target.value
      })
    }
    const filteredPokemon = this.state.list.filter(item => {
      if(this.state.selected === true);
      return item.type_1 === this.state.selected;
    })
    return (
      <div className = 'body'>
        <Header />
        <main>
          <div className="filter">
            <label>Filter by type: </label>
            <select name="type_1" onChange={handleChange}>
              <option value="default-value">All types</option>
              <option value="fire">Fire</option>
              <option value="grass">Grass</option>
              <option value="bug">Bug</option>
              <option value="water">Water</option>
              <option value="normal">Normal</option>
            </select>
            </div>
            <PokeList pokedeck = {filteredPokemon} />
        </main>
      </div>
    );
  }
} 