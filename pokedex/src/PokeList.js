import React, { Component } from 'react';
import PokeItem from './PokeItem';

export default class PokeList extends Component {
    render() {
        const mappedPokemon = this.props.pokedeck.map(item => {
            return (
                <PokeItem pokemon={item} key={item.id} />
            )
        }
        )
        return (
            <ul className='deck-container'>
                {mappedPokemon}
            </ul>        
        )
    }
}
