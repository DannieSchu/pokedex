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

//   export default class PokeList extends Component{
//     render() {
//       return (
//         <ul className = 'deck-container'>
//             {this.props.pokedeck.map((item, index) => <PokeItem pokemon={item} key={item.id} />)}
//         </ul>
//       )
//     }
//   }