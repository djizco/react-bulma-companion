import React from 'react';
import { render } from '@testing-library/react';

import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders', () => {
    render(<Navbar />);
  });

  it('should have class .navbar', () => {
    const { container }  = render(<Navbar />);

    expect(container.firstChild).toHaveClass('navbar');
  });
});
