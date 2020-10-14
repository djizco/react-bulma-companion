import React from 'react';
import { render } from '@testing-library/react';

import Tile from './Tile';

describe('Tile', () => {
  test('renders', () => {
    render(<Tile />);
  });

  it('should have class .tile', () => {
    const { container }  = render(<Tile />);

    expect(container.firstChild).toHaveClass('tile');
  });
});
