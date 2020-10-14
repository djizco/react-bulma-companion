import React from 'react';
import { render } from '@testing-library/react';

import Block from './Block';

describe('Block', () => {
  it('renders', () => {
    render(<Block />);
  });

  it('should have class .block', () => {
    const { container }  = render(<Block />);

    expect(container.firstChild).toHaveClass('block');
  });
});
