import React from 'react';
import { render } from '@testing-library/react';

import Title from './Title';

describe('Title', () => {
  test('renders', () => {
    render(<Title />);
  });

  it('should have class .title', () => {
    const { container }  = render(<Title />);

    expect(container.firstChild).toHaveClass('title');
  });

  it('should have class .subtitle with subtitle prop', () => {
    const { container }  = render(<Title subtitle />);

    expect(container.firstChild).toHaveClass('subtitle');
  });
});
