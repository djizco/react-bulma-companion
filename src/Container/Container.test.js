import React from 'react';
import { render } from '@testing-library/react';

import Container from './Container';

describe('Container', () => {
  test('renders', () => {
    render(<Container />);
  });

  it('should have class .container', () => {
    const { container }  = render(<Container />);

    expect(container.firstChild).toHaveClass('container');
  });
});
