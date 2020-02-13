import React, { Component } from 'react';
import Header from './Header';
import PokeList from './PokeList';
// import data from './Data';
import './App.css';
import './index.css';

export default class App extends Component{
  render() {
    return (
      <body>
        <Header />
        <PokeList />
      </body>
    );
  }
}