import React from 'react';
import { render } from '@testing-library/react';

import Progress from './Progress';

describe('Progress', () => {
  test('renders', () => {
    render(<Progress />);
  });

  it('should have class .progress', () => {
    const { container }  = render(<Progress />);

    expect(container.firstChild).toHaveClass('progress');
  });
});
