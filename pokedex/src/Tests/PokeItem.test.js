import React from 'react'
import renderer from 'react-test-renderer';
import PokeItem from '../PokeItem';

test('renders PokeItem.js correctly', () => {
    const item = {}
    const tree = renderer
      .create(<PokeItem pokemon= {item} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });