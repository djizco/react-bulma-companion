import React from 'react';
import { render } from '@testing-library/react';

import Hero from './Hero';

describe('Hero', () => {
  test('renders', () => {
    render(<Hero />);
  });

  it('should have class .hero', () => {
    const { container }  = render(<Hero />);

    expect(container.firstChild).toHaveClass('hero');
  });
});
