import React from 'react';
import { render } from '@testing-library/react';

import Heading from './Heading';

describe('Heading', () => {
  test('renders', () => {
    render(<Heading />);
  });

  it('should have class .heading', () => {
    const { container }  = render(<Heading />);

    expect(container.firstChild).toHaveClass('heading');
  });
});
