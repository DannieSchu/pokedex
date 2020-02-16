import React, { Component } from 'react';
import SearchOptions from './SearchOptions';
import Paging from './Paging';


export default class Header extends Component{
    render() {
      return (
        <header>
            <div className="heading-container">
              <h1>Pokemon</h1>
              <Paging pokemonCount={this.props.pokemonCount}/>
            </div>
            <SearchOptions />
        </header>
      );
    }
  }