import React from 'react';
import { render } from '@testing-library/react';

import Menu from './Menu';

describe('Menu', () => {
  test('renders', () => {
    render(<Menu />);
  });

  it('should have class .menu', () => {
    const { container }  = render(<Menu />);

    expect(container.firstChild).toHaveClass('menu');
  });
});
