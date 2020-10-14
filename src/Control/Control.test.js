import React from 'react';
import { render } from '@testing-library/react';

import Control from './Control';

describe('Control', () => {
  test('renders', () => {
    render(<Control />);
  });

  it('should have class .control', () => {
    const { container }  = render(<Control />);

    expect(container.firstChild).toHaveClass('control');
  });
});
