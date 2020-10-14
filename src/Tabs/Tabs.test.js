import React from 'react';
import { render } from '@testing-library/react';

import Tabs from './Tabs';

describe('Tabs', () => {
  test('renders', () => {
    render(<Tabs />);
  });

  it('should have class .tabs', () => {
    const { container }  = render(<Tabs />);

    expect(container.firstChild).toHaveClass('tabs');
  });
});
