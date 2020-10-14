import React from 'react';
import { render } from '@testing-library/react';

import Column from './Column';

describe('Column', () => {
  test('renders', () => {
    render(<Column />);
  });

  it('should have class .column', () => {
    const { container }  = render(<Column />);

    expect(container.firstChild).toHaveClass('column');
  });
});
