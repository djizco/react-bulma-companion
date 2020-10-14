import React from 'react';
import { render } from '@testing-library/react';

import Radio from './Radio';

describe('Radio', () => {
  test('renders', () => {
    render(<Radio />);
  });

  it('should have class .radio', () => {
    const { container }  = render(<Radio />);

    expect(container.firstChild).toHaveClass('radio');
  });
});
