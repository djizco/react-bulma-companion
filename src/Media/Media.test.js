import React from 'react';
import { render } from '@testing-library/react';

import Media from './Media';

describe('Media', () => {
  test('renders', () => {
    render(<Media />);
  });

  it('should have class .media', () => {
    const { container }  = render(<Media />);

    expect(container.firstChild).toHaveClass('media');
  });
});
