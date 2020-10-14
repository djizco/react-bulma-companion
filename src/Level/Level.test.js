import React from 'react';
import { render } from '@testing-library/react';

import Level from './Level';

describe('Level', () => {
  test('renders', () => {
    render(<Level />);
  });

  it('should have class .level', () => {
    const { container }  = render(<Level />);

    expect(container.firstChild).toHaveClass('level');
  });
});
