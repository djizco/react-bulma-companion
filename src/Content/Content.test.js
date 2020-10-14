import React from 'react';
import { render } from '@testing-library/react';

import Content from './Content';

describe('Content', () => {
  test('renders', () => {
    render(<Content />);
  });

  it('should have class .content', () => {
    const { container }  = render(<Content />);

    expect(container.firstChild).toHaveClass('content');
  });
});
