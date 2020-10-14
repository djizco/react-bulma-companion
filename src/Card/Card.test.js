import React from 'react';
import { render } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  test('renders', () => {
    render(<Card />);
  });

  it('should have class .card', () => {
    const { container }  = render(<Card />);

    expect(container.firstChild).toHaveClass('card');
  });
});
