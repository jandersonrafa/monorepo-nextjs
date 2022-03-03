import React from 'react';
import renderer from 'react-test-renderer';
import { Product } from '../src/Product';

it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});
