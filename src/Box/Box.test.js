import React from 'react';
import { render } from '@testing-library/react';

import Box from './Box';

describe('Box', () => {
  it('renders', () => {
    render(<Box />);
  });

  it('should have class .box', () => {
    const { container }  = render(<Box />);

    expect(container.firstChild).toHaveClass('box');
  });
});
