import React from 'react';
import { render } from '@testing-library/react';

import Dropdown from './Dropdown';

describe('Dropdown', () => {
  test('renders', () => {
    render(<Dropdown />);
  });

  it('should have class .dropdown', () => {
    const { container }  = render(<Dropdown />);

    expect(container.firstChild).toHaveClass('dropdown');
  });
});
