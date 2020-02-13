import React from 'react';
import renderer from 'react-test-renderer';
import PokeList from '../PokeList';

test('renders PokeList.js correctly', () => {
    const arr = [];
    const tree = renderer
        .create(<PokeList pokedeck = {arr} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})