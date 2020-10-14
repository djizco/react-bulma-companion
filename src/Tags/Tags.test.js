import React from 'react';
import { render } from '@testing-library/react';

import Tags from './Tags';

describe('Tags', () => {
  test('renders', () => {
    render(<Tags />);
  });

  it('should have class .tags', () => {
    const { container }  = render(<Tags />);

    expect(container.firstChild).toHaveClass('tags');
  });
});
