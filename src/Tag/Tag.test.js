import React from 'react';
import { render } from '@testing-library/react';

import Tag from './Tag';

describe('Tag', () => {
  test('renders', () => {
    render(<Tag />);
  });

  it('should have class .tag', () => {
    const { container }  = render(<Tag />);

    expect(container.firstChild).toHaveClass('tag');
  });
});
