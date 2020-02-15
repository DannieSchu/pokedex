import React from 'react';
import renderer from 'react-test-renderer';
import SearchOptions from '../SearchOptions';

test('renders SearchOptions.js correctly', () => {
    const tree = renderer
        .create(<SearchOptions />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})