import React, { Component } from 'react';
import PokeItem from './PokeItem';

export default class PokeList extends Component{
    render() {
      return (
        <ul>
            <PokeItem />
        </ul>
      );
    }
  }